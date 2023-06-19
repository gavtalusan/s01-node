let products = [
{
	name: "Nacho Cheese",
	price: 50,
	stocks: 10
},
{
	name: "Clover Chips"
	price: 40,
  	stocks: 10
},
{
	name: "KitKat"
	price: 35,
	stocks: 20	
}
];

http.createServer(function (request, response){
	//endpoint
	console.log(request.url)
	// method of request
	console.log(request.method)

	if(request.url === "/" && request.method === "GET"){
		response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Items to be shown in this route')
} else if(request.url === "/" && request.method === "POST"){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hi form a new post request with / endpoint')
}else if(request.url === "/items" && request.method === "GET"){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Items to be shown in this route')
}
}).listen(4000);
console.log("Server running at localhost: 4000");