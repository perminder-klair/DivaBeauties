class Stackable {
  constructor(token) {
    this._token = token;
    this._apiVersion = 'v1';
    this._apiUrl = 'https://api.stackable.space';
  }

  getContainers(callback) {
    this._get('containers', function(err, res) {
      callback(err, res);
    });
  }

  getContainer(containerId, callback) {
    this._get(`containers/${containerId}`, function(err, res) {
      callback(err, res);
    });
  }

  getContainerItems(containerId, callback) {
    this._get(`containers/${containerId}/items`, function(err, res) {
      callback(err, res);
    });
  }

  getAllItems(callback) {
    this._get('items', function(err, res) {
      callback(err, res);
    });
  }

  getItem(itemId, callback) {
    this._get(`items/${itemId}`, function(err, res) {
      callback(err, res);
    });
  }

  createItem(containerId, data, callback) {
    this._post('items', {containerId}, data, function(err, res) {
      callback(err, res);
    });
  }

  updateItem(itemId, data, callback) {
    this._put(`items/${itemId}`, data, function(err, res) {
      callback(err, res);
    });
  }

  _get(path, callback) {
    let endPoint = `${this._apiUrl}/${this._apiVersion}/${path}?token=${this._token}`;

    if (typeof window === 'undefined') {
      //is node
      const fetch = require('node-fetch');
      fetch(endPoint)
        .then(function(response) {
          if (response.status >= 400) {
            let err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        })
        .then(function(response) {
          return callback(false, response);
        });
    } else {
      //is browser
      $.ajax({
        url: endPoint,
        type: 'GET',
        context: document.body,
        success: function(response) {
          callback(false, response);
        },
        error: function(err) {
          callback(err, false);
        }
      });
    }
  }

  _post(path, params, data, callback) {
    let endPoint = `${this._apiUrl}/${this._apiVersion}/${path}?token=${this._token}`;

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
      const fetch = require('node-fetch');
      fetch(endPoint, {method: 'POST', body: data})
        .then(function(response) {
          if (response.status >= 400) {
            let err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        })
        .then(function(response) {
          return callback(false, response);
        });
    } else {
      //is browser
      $.ajax({
        url: endPoint,
        type: 'POST',
        context: document.body,
        data: data,
        success: function(response) {
          callback(false, response);
        },
        error: function(err) {
          callback(err, false);
        }
      });
    }
  }

  _put(path, data, callback) {
    let endPoint = `${this._apiUrl}/${this._apiVersion}/${path}?token=${this._token}`;

    if (typeof window === 'undefined') {
      //is node
      const fetch = require('node-fetch');
      fetch(endPoint, {method: 'PUT', body: data})
        .then(function(response) {
          if (response.status >= 400) {
            let err = {
              'message': 'There was an error with this request.'
            };
            return callback(err, false);
          }

          return response.json();
        })
        .then(function(response) {
          return callback(false, response);
        });
    } else {
      //is browser
      $.ajax({
        url: endPoint,
        type: 'PUT',
        context: document.body,
        data: data,
        success: function(response) {
          callback(false, response);
        },
        error: function(err) {
          callback(err, false);
        }
      });
    }
  }
}

if (typeof window === 'undefined') {
  module.exports = Stackable;
}
