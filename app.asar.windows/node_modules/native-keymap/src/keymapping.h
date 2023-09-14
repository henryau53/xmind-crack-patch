/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

#ifndef KEYMAPPING_H_
#define KEYMAPPING_H_

#include <node_api.h>

#include <string>
#include <vector>
#include "../deps/chromium/keyboard_codes.h"

#if defined(__unix__)
#include <pthread.h>
#endif

#define CHECK_OK(x) if (x != napi_ok) return NULL

namespace vscode_keyboard {

// This structure is used to define the keycode mapping table.
// It is defined here because the unittests need access to it.
typedef struct {
  // USB keycode:
  //  Upper 16-bits: USB Usage Page.
  //  Lower 16-bits: USB Usage Id: Assigned ID within this usage page.
  uint32_t usb_keycode;

  // Contains one of the following:
  //  On Linux: XKB scancode
  //  On Windows: Windows OEM scancode
  //  On Mac: Mac keycode
  int native_keycode;

  // The UIEvents (aka: DOM4Events) |code| value as defined in:
  // http://www.w3.org/TR/DOM-Level-3-Events-code/
  const char* code;
} KeycodeMapEntry;

#if defined(__unix__)
typedef struct {
  pthread_t tid;
  napi_threadsafe_function tsfn;
} NotificationCallbackData;

void DeleteInstanceData(napi_env env, void *raw_data, void *hint);
#endif

napi_value _GetKeyMap(napi_env env, napi_callback_info info);
napi_value _GetCurrentKeyboardLayout(napi_env env, napi_callback_info info);
napi_value _OnDidChangeKeyboardLayout(napi_env env, napi_callback_info info);
napi_value _isISOKeyboard(napi_env env, napi_callback_info info);

napi_status napi_set_named_property_string_utf8(napi_env env, napi_value object, const char *utf8Name, const char *value);
napi_status napi_set_named_property_int32(napi_env env, napi_value object, const char *utf8Name, int value);
napi_value napi_fetch_null(napi_env env);
napi_value napi_fetch_undefined(napi_env env);
napi_value napi_fetch_boolean(napi_env env, bool value);

}  // namespace vscode_keyboard

#endif  // KEYMAPPING_H_
