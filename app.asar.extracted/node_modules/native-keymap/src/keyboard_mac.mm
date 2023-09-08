/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#import <Cocoa/Cocoa.h>
#include <Carbon/Carbon.h>

#include "string_conversion.h"
#include "keymapping.h"
#include "common.h"
#include "../deps/chromium/macros.h"

namespace {

std::pair<bool,std::string> ConvertKeyCodeToText(const UCKeyboardLayout* keyboardLayout, int mac_key_code, int modifiers) {

  int mac_modifiers = 0;
  if (modifiers & kShiftKeyModifierMask)
    mac_modifiers |= shiftKey;
  if (modifiers & kControlKeyModifierMask)
    mac_modifiers |= controlKey;
  if (modifiers & kAltKeyModifierMask)
    mac_modifiers |= optionKey;
  if (modifiers & kMetaKeyModifierMask)
    mac_modifiers |= cmdKey;

  // Convert EventRecord modifiers to format UCKeyTranslate accepts. See docs
  // on UCKeyTranslate for more info.
  UInt32 modifier_key_state = (mac_modifiers >> 8) & 0xFF;

  UInt32 dead_key_state = 0;
  UniCharCount char_count = 0;
  UniChar character = 0;
  OSStatus status = UCKeyTranslate(
      keyboardLayout,
      static_cast<UInt16>(mac_key_code),
      kUCKeyActionDown,
      modifier_key_state,
      LMGetKbdLast(),
      kUCKeyTranslateNoDeadKeysBit,
      &dead_key_state,
      1,
      &char_count,
      &character);

  bool isDeadKey = false;
  if (status == noErr && char_count == 0 && dead_key_state != 0) {
    isDeadKey = true;
    status = UCKeyTranslate(
        keyboardLayout,
        static_cast<UInt16>(mac_key_code),
        kUCKeyActionDown,
        modifier_key_state,
        LMGetKbdLast(),
        kUCKeyTranslateNoDeadKeysBit,
        &dead_key_state,
        1,
        &char_count,
        &character);
  }

  if (status == noErr && char_count == 1 && !std::iscntrl(character)) {
    wchar_t value = character;
    return std::make_pair(isDeadKey, vscode_keyboard::UTF16toUTF8(&value, 1));
  }
  return std::make_pair(false, std::string());
}

} // namespace

namespace vscode_keyboard {


#define USB_KEYMAP(usb, evdev, xkb, win, mac, code, id) {usb, mac, code}
#define USB_KEYMAP_DECLARATION const KeycodeMapEntry usb_keycode_map[] =
#include "../deps/chromium/keycode_converter_data.inc"
#undef USB_KEYMAP
#undef USB_KEYMAP_DECLARATION

napi_value _GetKeyMap(napi_env env, napi_callback_info info) {

  napi_value result;
  NAPI_CALL(env, napi_create_object(env, &result));

  TISInputSourceRef source = TISCopyCurrentKeyboardInputSource();
  CFDataRef layout_data = static_cast<CFDataRef>((TISGetInputSourceProperty(source, kTISPropertyUnicodeKeyLayoutData)));
  if (!layout_data) {
    // TISGetInputSourceProperty returns null with  Japanese keyboard layout.
    // Using TISCopyCurrentKeyboardLayoutInputSource to fix NULL return.
    source = TISCopyCurrentKeyboardLayoutInputSource();
    layout_data = static_cast<CFDataRef>((TISGetInputSourceProperty(source, kTISPropertyUnicodeKeyLayoutData)));
    if (!layout_data) {
      // https://developer.apple.com/library/mac/documentation/TextFonts/Reference/TextInputSourcesReference/#//apple_ref/c/func/TISGetInputSourceProperty
      return result;
    }
  }

  const UCKeyboardLayout* keyboardLayout = reinterpret_cast<const UCKeyboardLayout*>(CFDataGetBytePtr(layout_data));

  size_t cnt = sizeof(usb_keycode_map) / sizeof(usb_keycode_map[0]);

  napi_value _true;
  NAPI_CALL(env, napi_get_boolean(env, true, &_true));

  napi_value _false;
  NAPI_CALL(env, napi_get_boolean(env, false, &_false));

  for (size_t i = 0; i < cnt; ++i) {
    const char *code = usb_keycode_map[i].code;
    int native_keycode = usb_keycode_map[i].native_keycode;

    if (!code || native_keycode >= 0xffff) {
      continue;
    }

    napi_value entry;
    NAPI_CALL(env, napi_create_object(env, &entry));

    {
      std::pair<bool,std::string> value = ConvertKeyCodeToText(keyboardLayout, native_keycode, 0);
      NAPI_CALL(env, napi_set_named_property_string_utf8(env, entry, "value", value.second.c_str()));
      NAPI_CALL(env, napi_set_named_property(env, entry, "valueIsDeadKey", value.first ? _true : _false));
    }

    {
      std::pair<bool,std::string> withShift = ConvertKeyCodeToText(keyboardLayout, native_keycode, kShiftKeyModifierMask);
      NAPI_CALL(env, napi_set_named_property_string_utf8(env, entry, "withShift", withShift.second.c_str()));
      NAPI_CALL(env, napi_set_named_property(env, entry, "withShiftIsDeadKey", withShift.first ? _true : _false));
    }

    {
      std::pair<bool,std::string> withAltGr = ConvertKeyCodeToText(keyboardLayout, native_keycode, kAltKeyModifierMask);
      NAPI_CALL(env, napi_set_named_property_string_utf8(env, entry, "withAltGr", withAltGr.second.c_str()));
      NAPI_CALL(env, napi_set_named_property(env, entry, "withAltGrIsDeadKey", withAltGr.first ? _true : _false));
    }

    {
      std::pair<bool,std::string> withShiftAltGr = ConvertKeyCodeToText(keyboardLayout, native_keycode, kShiftKeyModifierMask | kAltKeyModifierMask);
      NAPI_CALL(env, napi_set_named_property_string_utf8(env, entry, "withShiftAltGr", withShiftAltGr.second.c_str()));
      NAPI_CALL(env, napi_set_named_property(env, entry, "withShiftAltGrIsDeadKey", withShiftAltGr.first ? _true : _false));
    }

    NAPI_CALL(env, napi_set_named_property(env, result, code, entry));
  }
  return result;
}

napi_value _GetCurrentKeyboardLayout(napi_env env, napi_callback_info info) {

  napi_value result;
  NAPI_CALL(env, napi_create_object(env, &result));

  TISInputSourceRef source = TISCopyCurrentKeyboardInputSource();
  CFStringRef sourceId = (CFStringRef) TISGetInputSourceProperty(source, kTISPropertyInputSourceID);
  if(sourceId) {
    NAPI_CALL(env, napi_set_named_property_string_utf8(env, result, "id", std::string([(NSString *)sourceId UTF8String]).c_str()));
  }

  TISInputSourceRef nameSource = TISCopyCurrentKeyboardInputSource();
  CFStringRef localizedName = (CFStringRef) TISGetInputSourceProperty(nameSource, kTISPropertyLocalizedName);
  if(localizedName) {
    NAPI_CALL(env, napi_set_named_property_string_utf8(env, result, "localizedName", std::string([(NSString *)localizedName UTF8String]).c_str()));
  }

  NSArray* languages = (NSArray *) TISGetInputSourceProperty(source, kTISPropertyInputSourceLanguages);
  if (languages && [languages count] > 0) {
    NSString* lang = [languages objectAtIndex:0];
    if (lang) {
      NAPI_CALL(env, napi_set_named_property_string_utf8(env, result, "lang", std::string([lang UTF8String]).c_str()));
    }
  }

  return result;
}

typedef struct {
  napi_env env;
  napi_async_context context;
  napi_ref funcRef;
} NotificationCallbackData;

void notificationCallback(CFNotificationCenterRef center, void *observer, CFStringRef name, const void *object, CFDictionaryRef userInfo) {
  napi_handle_scope scope;

  NotificationCallbackData *data = (NotificationCallbackData *)observer;
  napi_env env = data->env;
  napi_async_context context = data->context;
  napi_ref funcRef = data->funcRef;
  napi_open_handle_scope(env, &scope);

  napi_value global;
  NAPI_CALL_RETURN_VOID(env, napi_get_global(env, &global));

  napi_value func;
  NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, funcRef, &func));

  std::vector<napi_value> argv;
  NAPI_CALL_RETURN_VOID(env, napi_make_callback(env, context, global, func, argv.size(), argv.data(), NULL));
  
  napi_close_handle_scope(env, scope);
}

napi_value _OnDidChangeKeyboardLayout(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value args[2];
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, args, NULL, NULL));

  NAPI_ASSERT(env, argc == 1, "Wrong number of arguments. Expects a single argument.");

  napi_valuetype valuetype0;
  NAPI_CALL(env, napi_typeof(env, args[0], &valuetype0));
  NAPI_ASSERT(env, valuetype0 == napi_function, "Wrong type of arguments. Expects a function as first argument.");

  napi_value func = args[0];
  napi_ref funcRef;
  NAPI_CALL(env, napi_create_reference(env, func, 1, &funcRef));

  napi_value resource_name;
  NAPI_CALL(env, napi_create_string_utf8(env, "onDidChangeKeyboardLayoutCallback", NAPI_AUTO_LENGTH, &resource_name));

  napi_async_context context;
  NAPI_CALL(env, napi_async_init(env, func, resource_name, &context));

  NotificationCallbackData *data = new NotificationCallbackData();
  data->env = env;
  data->context = context;
  data->funcRef = funcRef;

  CFNotificationCenterRef center = CFNotificationCenterGetDistributedCenter();

  // add an observer
  CFNotificationCenterAddObserver(center, data, notificationCallback,
    kTISNotifySelectedKeyboardInputSourceChanged, NULL,
    CFNotificationSuspensionBehaviorDeliverImmediately
  );

  return napi_fetch_undefined(env);
}

napi_value _isISOKeyboard(napi_env env, napi_callback_info info) {
  if (KBGetLayoutType(LMGetKbdType()) == kKeyboardISO) {
    return napi_fetch_boolean(env, true);
  } else {
    return napi_fetch_boolean(env, false);
  }
}

} // namespace vscode_keyboard
