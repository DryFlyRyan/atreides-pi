var express = require('express');
var http = require('http');
var Socket = require('socket.io');
var port = 3000;

var app = express();
var server = http.Server(app);



server.listen(port, function(){
  console.log("Server listening on ", port);
});

module.exports = app;
