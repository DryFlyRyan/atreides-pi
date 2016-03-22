var express = require('express');
var http = require('http');
var socket = require('socket.io');
var port = 3000;

var app = express();
var server = http.Server(app);
var io = socket(server);

function socketTester() {
   return Math.floor(Math.random() * 20);
}

var tapOpen = false;

function tapTimeout() {
  
}

io.on('connection', function(socket){
  setInterval(function(){
    var pourVolume = socketTester();
    socket.emit('pourVolumeData', {
      body: pourVolume
    })
  })
})

setTimeout


server.listen(port, function(){
  console.log("Server listening on ", port);
});

module.exports = app;
