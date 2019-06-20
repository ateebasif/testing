var expect = require('chai').expect;  
var io  = require('socket.io-client');
var app = require('../index.js');

describe('Sockets', function () {  
  var client1, client2, client3;

  it('should receive a message', function (done) {  
    
    var socket = io.connect('http://127.0.0.1:3000');

      socket.on('message', function(msg){
      expect(msg).to.equal('test');
      done();
    });

});

    it('should send a message', function(done){

        var msg = 'hello';

        var socket = io.connect('http://127.0.0.1:3000');

        socket.emit('sending',msg);

        expect(msg).to.equal('hello');
        done();

    });


});