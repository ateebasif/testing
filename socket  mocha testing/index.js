var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '../node_modules'));

  io.on('connect', function(socket){
    console.log('server is connected with client');
        
    socket.on('disconnect', function(){
        console.log('user disconnected');
        });
        
      socket.emit('message','test');
  

      socket.on('sending',function(data){
        console.log(data);
      });
  
        
  });



server.listen(3000);