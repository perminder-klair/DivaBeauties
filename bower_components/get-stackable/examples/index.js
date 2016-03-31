var http = require('http');
var Stackable = require('../dist/stackable');

var stackable = new Stackable('GEG8F7LBGyDz');

var server = http.createServer(function(request, response) {
  // magic happens here!

  stackable.getContainerItems('qnwesbEkW7kcjqzZ7', function (error, result) {
    console.log(error, result);
  });
}).listen(8080);
