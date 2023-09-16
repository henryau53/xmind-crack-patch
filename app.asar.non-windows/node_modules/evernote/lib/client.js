'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _stores = require('./stores');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WrappedNoteStoreClient = function () {
  function WrappedNoteStoreClient(enInfoFunc) {
    _classCallCheck(this, WrappedNoteStoreClient);

    this.enInfoFunc = enInfoFunc;

    for (var key in _stores.NoteStoreClient.prototype) {
      if (key.indexOf('_') === -1 && typeof _stores.NoteStoreClient.prototype[key] === 'function') {
        this[key] = this.createWrapperFunction(key);
      }
    }
  }

  _createClass(WrappedNoteStoreClient, [{
    key: 'getThriftClient',
    value: function getThriftClient() {
      if (!this._thriftClient) {
        this._thriftClient = this.enInfoFunc().then(function (_ref) {
          var token = _ref.token,
              url = _ref.url;

          return new _stores.NoteStoreClient({ token: token, url: url });
        });
      }
      return this._thriftClient;
    }
  }, {
    key: 'createWrapperFunction',
    value: function createWrapperFunction(name) {
      var _this = this;

      return function () {
        for (var _len = arguments.length, orgArgs = Array(_len), _key = 0; _key < _len; _key++) {
          orgArgs[_key] = arguments[_key];
        }

        return _this.getThriftClient().then(function (client) {
          return client[name].apply(client, orgArgs);
        });
      };
    }
  }, {
    key: 'getParamNames',
    value: function getParamNames(func) {
      var funStr = func.toString();
      return funStr.slice(funStr.indexOf('(') + 1, funStr.indexOf(')')).match(/([^\s,]+)/g);
    }
  }]);

  return WrappedNoteStoreClient;
}();

var Client = function () {
  function Client() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Client);

    this.consumerKey = options.consumerKey;
    this.consumerSecret = options.consumerSecret;
    this.sandbox = options.sandbox === undefined ? true : options.sandbox;
    this.china = !!options.china;
    this.token = options.token;
    var defaultServiceHost = void 0;
    if (this.sandbox) {
      defaultServiceHost = 'sandbox.evernote.com';
    } else if (this.china) {
      defaultServiceHost = 'app.yinxiang.com';
    } else {
      defaultServiceHost = 'www.evernote.com';
    }
    this.serviceHost = options.serviceHost || defaultServiceHost;
  }

  _createClass(Client, [{
    key: 'getRequestToken',
    value: function getRequestToken(callbackUrl, callback) {
      var oauth = this.getOAuthClient(callbackUrl);
      oauth.getOAuthRequestToken(function (err, oauthToken, oauthTokenSecret, results) {
        callback(err, oauthToken, oauthTokenSecret, results);
      });
    }
  }, {
    key: 'getAuthorizeUrl',
    value: function getAuthorizeUrl(oauthToken) {
      return this.getEndpoint('OAuth.action') + '?oauth_token=' + oauthToken;
    }
  }, {
    key: 'getAccessToken',
    value: function getAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, callback) {
      var _this2 = this;

      var oauth = this.getOAuthClient('');
      oauth.getOAuthAccessToken(oauthToken, oauthTokenSecret, oauthVerifier, function (err, oauthAccessToken, oauthAccessTokenSecret, results) {
        _this2.token = oauthAccessToken;
        callback(err, oauthAccessToken, oauthAccessTokenSecret, results);
      });
    }
  }, {
    key: 'getUserStore',
    value: function getUserStore() {
      if (!this._userStore) {
        this._userStore = new _stores.UserStoreClient({
          token: this.token,
          url: this.getEndpoint('/edam/user')
        });
      }
      return this._userStore;
    }
  }, {
    key: 'getNoteStore',
    value: function getNoteStore(noteStoreUrl) {
      var _this3 = this;

      if (noteStoreUrl) {
        this.noteStoreUrl = noteStoreUrl;
      }
      return new WrappedNoteStoreClient(function () {
        if (_this3.noteStoreUrl) {
          return Promise.resolve({ token: _this3.token, url: _this3.noteStoreUrl });
        } else {
          return _this3.getUserStore().getUserUrls().then(function (userUrls) {
            _this3.noteStoreUrl = userUrls.noteStoreUrl; // cache for later calls
            return { token: _this3.token, url: userUrls.noteStoreUrl };
          });
        }
      });
    }
  }, {
    key: 'getSharedNoteStore',
    value: function getSharedNoteStore(linkedNotebook) {
      var _this4 = this;

      return new WrappedNoteStoreClient(function () {
        var cache = _this4[linkedNotebook.sharedNotebookGlobalId];
        if (cache && cache.sharedToken) {
          return Promise.resolve({ token: cache.sharedToken, url: linkedNotebook.noteStoreUrl });
        } else {
          return _this4.getNoteStore().authenticateToSharedNotebook(linkedNotebook.sharedNotebookGlobalId).then(function (sharedAuth) {
            var token = sharedAuth.authenticationToken;
            // cache for later calls
            _this4[linkedNotebook.sharedNotebookGlobalId] = { sharedToken: token };
            return { token: token, url: linkedNotebook.noteStoreUrl };
          });
        }
      });
    }
  }, {
    key: 'getBusinessNoteStore',
    value: function getBusinessNoteStore() {
      var _this5 = this;

      return new WrappedNoteStoreClient(function () {
        if (_this5.bizToken && _this5.bizNoteStoreUrl) {
          return Promise.resolve({ token: _this5.bizToken, url: _this5.bizNoteStoreUrl });
        } else {
          return _this5.getUserStore().authenticateToBusiness().then(function (bizAuth) {
            _this5.bizToken = bizAuth.authenticationToken;
            _this5.bizNoteStoreUrl = bizAuth.noteStoreUrl;
            _this5.bizUser = bizAuth.user;
            return { token: bizAuth.authenticationToken, url: bizAuth.noteStoreUrl };
          });
        }
      });
    }
  }, {
    key: 'getEndpoint',
    value: function getEndpoint(path) {
      var url = 'https://' + this.serviceHost;
      if (path) {
        url = url + '/' + path;
      }
      return url;
    }
  }, {
    key: 'getOAuthClient',
    value: function getOAuthClient(callbackUrl) {
      return new _oauth2.default.OAuth(this.getEndpoint('oauth'), this.getEndpoint('oauth'), this.consumerKey, this.consumerSecret, '1.0', callbackUrl, 'HMAC-SHA1');
    }
  }]);

  return Client;
}();

exports.default = Client;