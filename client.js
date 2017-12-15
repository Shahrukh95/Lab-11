var net = require('net');

var client = new net.Socket();
client.connect(8888, '127.0.0.1', function() {
	console.log('Connected To Localhost 127.0.0.1');
	client.write('Hello, server! Message from Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
	client.destroy(); // kill client after server's response
});

client.on('close', function() {
	console.log('Connection closed');
});