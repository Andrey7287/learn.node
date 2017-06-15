const net = require('net');

var server = net.createServer((conn)=>{
	console.log('connected');
	conn.on('data', (data)=>{
		console.log(`${data} от ${conn.remoteAddress} ${conn.remotePort}`);
	});
	conn.on('close', ()=>console.log('client closed connection'));
}).listen(8124);
console.log('listening on 8124');
