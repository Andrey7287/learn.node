const http = require('http'),
			fs = require('fs'),
			url = require('url'),
			queryString = require('querystring');

var cnt = 0;

function writeNumbers(res){

	for (var i = 0; i < 100; i++){
		cnt++;
		res.write(`${cnt}\n`);
	}
}

http.createServer((req, res)=>{

		var query = url.parse(req.url).query,
				app = `${queryString.parse(query).file}.txt`;
		res.writeHead(200, {'content-type': 'text/plain'});

		writeNumbers(res);

		setTimeout(function(){
			console.log(`opening ${app}`);
			fs.readFile(app, 'utf-8', (err, data)=>{

				if (err) {
						res.write(`could not find or open file ${app}`);
						res.end();
				} else {
						res.write(data);
						res.end();
				}

			});
		}, 2000);


}).listen(8888);

console.log('server open on 8888');
