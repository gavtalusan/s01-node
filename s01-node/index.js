let http = require('http')
//console.log(http)
http.createServer(function(request, response){
    console.log(request.url);
	if(request.url === "/"){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello!')
} else if (request.url === "/Gavin"){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Items to be shown in this route')
} else {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.end('Resource Cannot Be Found.')
}
}).listen(4000);
console.log("Server running at localhost: 4000");


