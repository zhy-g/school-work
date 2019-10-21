var  http = require('http');

http.createServer(function(request, response){
    response.writeHead(200, {'content-Type': 'text/plain'});

    response.end("Good morning!\n");
}).listen(9999);

console.log('Sever running at http://192.168.1.119:9999');