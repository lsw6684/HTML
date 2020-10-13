var http = require("http");
http.createServer(function (request, response){
    //Send the HTTP header, HTTP Status : 200 : OK
    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('<H1>Hello World</H1>');
}).listen(8088);
console.log('Server running at http://127.0.0.1:8088');