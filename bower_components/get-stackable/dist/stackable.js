'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stackable = function () {
  function Stackable(token) {
    _classCallCheck(this, Stackable);

    this._token = token;
    this._apiVersion = 'v1';
    this._apiUrl = 'https://api.stackable.space';
  }

  _createClass(Stackable, [{
    key: 'getContainers',
    value: function getContainers(callback) {
      this._get('containers', function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: 'getContainer',
    value: function getContainer(containerId, callback) {
      this._get('containers/' + containerId, function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: 'getContainerItems',
    value: function getContainerItems(containerId, callback) {
      this._get('containers/' + containerId + '/items', function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: 'getAllItems',
    value: function getAllItems(callback) {
      this._get('items', function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: 'getItem',
    value: function getItem(itemId, callback) {
      this._get('items/' + itemId, function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: 'createItem',
    value: function createItem(containerId, data, callback) {
      this._post('items', { containerId: containerId }, data, function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: 'updateItem',
    value: function updateItem(itemId, data, callback) {
      this._put('items/' + itemId, data, function (err, res) {
        callback(err, res);
      });
    }
  }, {
    key: '_get',
    value: function _get(path, callback) {
      var endPoint = this._apiUrl + '/' + this._apiVersion + '/' + path + '?token=' + this._token;

      if (typeof window === 'undefined') {
        //is node
        var fetch = require('node-fetch');
        fetch(endPoint).then(function (response) {
          if (response.status >= 400) {
            var err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        }).then(function (response) {
          return callback(false, response);
        });
      } else {
        //is browser
        $.ajax({
          url: endPoint,
          type: 'GET',
          context: document.body,
          success: function success(response) {
            callback(false, response);
          },
          error: function error(err) {
            callback(err, false);
          }
        });
      }
    }
  }, {
    key: '_post',
    value: function _post(path, params, data, callback) {
      var endPoint = this._apiUrl + '/' + this._apiVersion + '/' + path + '?token=' + this._token;

      var paramsStr = '';
      for (var key in params) {
        if (paramsStr != '') {
          paramsStr += '&';
        }
        paramsStr += key + '=' + encodeURIComponent(params[key]);
      }

      if (paramsStr.length > 0) {
        endPoint = endPoint + '&' + paramsStr;
      }

      if (typeof window === 'undefined') {
        //is node
        var fetch = require('node-fetch');
        fetch(endPoint, { method: 'POST', body: data }).then(function (response) {
          if (response.status >= 400) {
            var err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        }).then(function (response) {
          return callback(false, response);
        });
      } else {
        //is browser
        $.ajax({
          url: endPoint,
          type: 'POST',
          context: document.body,
          data: data,
          success: function success(response) {
            callback(false, response);
          },
          error: function error(err) {
            callback(err, false);
          }
        });
      }
    }
  }, {
    key: '_put',
    value: function _put(path, data, callback) {
      var endPoint = this._apiUrl + '/' + this._apiVersion + '/' + path + '?token=' + this._token;

      if (typeof window === 'undefined') {
        //is node
        var fetch = require('node-fetch');
        fetch(endPoint, { method: 'PUT', body: data }).then(function (response) {
          if (response.status >= 400) {
            var err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        }).then(function (response) {
          return callback(false, response);
        });
      } else {
        //is browser
        $.ajax({
          url: endPoint,
          type: 'PUT',
          context: document.body,
          data: data,
          success: function success(response) {
            callback(false, response);
          },
          error: function error(err) {
            callback(err, false);
          }
        });
      }
    }
  }]);

  return Stackable;
}();

if (typeof window === 'undefined') {
  module.exports = Stackable;
}