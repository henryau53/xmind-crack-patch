'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserStoreClient = exports.NoteStoreClient = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NoteStore = require('./thrift/gen-js2/NoteStore');

var _UserStore = require('./thrift/gen-js2/UserStore');

var _binaryHttpTransport = require('./thrift/transport/binaryHttpTransport');

var _binaryHttpTransport2 = _interopRequireDefault(_binaryHttpTransport);

var _binaryProtocol = require('./thrift/protocol/binaryProtocol');

var _binaryProtocol2 = _interopRequireDefault(_binaryProtocol);

var _package = require('../package.json');

var _package2 = _interopRequireDefault(_package);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Licensed to the Apache Software Foundation (ASF) under one
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * or more contributor license agreements. See the NOTICE file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * distributed with this work for additional information
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * regarding copyright ownership. The ASF licenses this file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to you under the Apache License, Version 2.0 (the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * "License"); you may not use this file except in compliance
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * with the License. You may obtain a copy of the License at
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   http://www.apache.org/licenses/LICENSE-2.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Unless required by applicable law or agreed to in writing,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * software distributed under the License is distributed on an
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * KIND, either express or implied. See the License for the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * specific language governing permissions and limitations
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * under the License.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/* eslint-env node */

var AUTH_PLACEHOLDER = 'AUTH_TOKEN';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var ARGUMENT_NAMES = /([^\s,]+)/g;

/**
 * Finds parameter names for a given function.
 * @return {Object[]}
 */
function getParamNames(fn) {
  var fnString = fn.toString().replace(STRIP_COMMENTS, '');
  var paramNames = fnString.slice(fnString.indexOf('(') + 1, fnString.indexOf(')')).match(ARGUMENT_NAMES);
  return paramNames === null ? [] : paramNames;
}

/**
 * Takes in a Store Client function, and supplies it with an authentication token when
 * necessary. Will return a Promise instead of using callbacks.
 *
 * @param {Function} fn
 * @param {String} fnName
 * @return {Promise}
 */
function makeProxyPromise(fn, fnName) {
  return function () {
    var _this = this;

    var newArgs = [];
    var paramNames = getParamNames(fn);
    var requiresAuthToken = false;
    paramNames.pop(); // remove the callback parameter, will use Promise instead.
    for (var i = 0; i < paramNames.length; i++) {
      var param = paramNames[i];
      if (param === 'authenticationToken') {
        newArgs.push(AUTH_PLACEHOLDER);
        requiresAuthToken = true;
      }
      if (i < arguments.length) {
        newArgs.push(arguments[i]);
      }
    }
    return new Promise(function (resolve, reject) {
      var expectedNum = requiresAuthToken ? paramNames.length - 1 : paramNames.length;
      var actualNum = requiresAuthToken ? newArgs.length - 1 : newArgs.length;
      if (expectedNum !== actualNum) {
        reject('Incorrect number of arguments passed to ' + fnName + ': expected ' + expectedNum + ' but found ' + actualNum);
      } else {
        var prelimPromise = requiresAuthToken ? _this.getAuthToken() : Promise.resolve();
        prelimPromise.then(function (authTokenMaybe) {
          if (authTokenMaybe) {
            newArgs[newArgs.indexOf(AUTH_PLACEHOLDER)] = authTokenMaybe;
          }
          newArgs.push(function (err, response) {
            return err ? reject(err) : resolve(response);
          });
          fn.apply(_this, newArgs);
        }).catch(function (err) {
          return reject(err);
        });
      }
    });
  };
}

function extendClientWithEdamClient(Client, EDAMClient) {
  for (var key in EDAMClient.prototype) {
    if (typeof EDAMClient.prototype[key] === 'function') {
      Client.prototype[key] = makeProxyPromise(EDAMClient.prototype[key], key);
    }
  }
}

function getAdditionalHeaders(token) {
  var m = token && token.match(/:A=([^:]+):/);
  var userAgentId = m ? m[1] : '';
  return {
    'User-Agent': userAgentId + '/' + _package2.default.version + '; Node.js / ' + process.version
  };
}

var UserStoreClient = function (_EDAMUserStore$Client) {
  _inherits(UserStoreClient, _EDAMUserStore$Client);

  function UserStoreClient() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, UserStoreClient);

    if (opts.url) {
      var transport = new _binaryHttpTransport2.default(opts.url);
      var protocol = new _binaryProtocol2.default(transport);
      transport.addHeaders(getAdditionalHeaders(opts.token));

      var _this2 = _possibleConstructorReturn(this, (UserStoreClient.__proto__ || Object.getPrototypeOf(UserStoreClient)).call(this, protocol));

      _this2.url = opts.url;
    } else {
      throw Error('UserStoreClient requires a UserStore Url when initialized');
    }
    if (opts.token) {
      _this2.token = opts.token;
    }
    return _possibleConstructorReturn(_this2);
  }

  _createClass(UserStoreClient, [{
    key: 'getAuthToken',
    value: function getAuthToken() {
      var _this3 = this;

      return new Promise(function (resolve) {
        return resolve(_this3.token);
      });
    }
  }]);

  return UserStoreClient;
}(_UserStore.UserStore.Client);

extendClientWithEdamClient(UserStoreClient, _UserStore.UserStore.Client);

var NoteStoreClient = function (_EDAMNoteStore$Client) {
  _inherits(NoteStoreClient, _EDAMNoteStore$Client);

  function NoteStoreClient() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, NoteStoreClient);

    if (opts.url) {
      var transport = new _binaryHttpTransport2.default(opts.url);
      var protocol = new _binaryProtocol2.default(transport);
      transport.addHeaders(getAdditionalHeaders(opts.token));

      var _this4 = _possibleConstructorReturn(this, (NoteStoreClient.__proto__ || Object.getPrototypeOf(NoteStoreClient)).call(this, protocol));

      _this4.url = opts.url;
    } else {
      throw Error('NoteStoreClient requires a NoteStore Url when initialized');
    }
    if (opts.token) {
      _this4.token = opts.token;
    }
    return _possibleConstructorReturn(_this4);
  }

  _createClass(NoteStoreClient, [{
    key: 'getAuthToken',
    value: function getAuthToken() {
      var _this5 = this;

      return new Promise(function (resolve) {
        return resolve(_this5.token);
      });
    }
  }]);

  return NoteStoreClient;
}(_NoteStore.NoteStore.Client);

extendClientWithEdamClient(NoteStoreClient, _NoteStore.NoteStore.Client);

exports.NoteStoreClient = NoteStoreClient;
exports.UserStoreClient = UserStoreClient;