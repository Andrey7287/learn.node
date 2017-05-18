const http = require('http'),
      fs = require('fs');

http.createServer((req, res)=>{

    fs.readFile('data.js', 'utf-8', (err, data)=>{
        res.writeHead(200, {'content-type': 'text/plain'});
        if (err) {
            res.write('cann`t open file');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    });
    
}).listen(8888, ()=>{console.log('bound to port 8888')});
console.log('server open on 8888');