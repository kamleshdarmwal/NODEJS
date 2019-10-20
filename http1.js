var http=require("http");
var server=http.createServer((request,response)=>{
    response.write("Pallu is luchi");
    response.end()
	});
server.listen(1007);