/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

function NativeBinding() {
  this._tried = false;
  this._keymapping = null;
}
NativeBinding.prototype._init = function() {
  if (this._tried) {
    return;
  }
  this._tried = true;
  this._keymapping = require('./build/Release/keymapping');
};
NativeBinding.prototype.getKeyMap = function() {
  try {
    this._init();
    return this._keymapping.getKeyMap();
  } catch(err) {
    console.error(err);
    return [];
  }
};
NativeBinding.prototype.getCurrentKeyboardLayout = function() {
  try {
    this._init();
    return this._keymapping.getCurrentKeyboardLayout();
  } catch(err) {
    console.error(err);
    return null;
  }
};
NativeBinding.prototype.onDidChangeKeyboardLayout = function(callback) {
  try {
    this._init();
    this._keymapping.onDidChangeKeyboardLayout(callback);
  } catch(err) {
    console.error(err);
  }
}
NativeBinding.prototype.isISOKeyboard = function(callback) {
  try {
    this._init();
    return this._keymapping.isISOKeyboard();
  } catch(err) {
    return false;
  }
}

var binding = new NativeBinding();

exports.getCurrentKeyboardLayout = function() {
  return binding.getCurrentKeyboardLayout();
};
exports.getKeyMap = function() {
  return binding.getKeyMap();
};
exports.onDidChangeKeyboardLayout = function(callback) {
  return binding.onDidChangeKeyboardLayout(callback);
};
exports.isISOKeyboard = function(callback) {
  return binding.isISOKeyboard(callback);
};
