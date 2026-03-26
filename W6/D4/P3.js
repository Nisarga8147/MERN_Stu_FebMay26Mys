// Inspecting request details in a HTTP server
const http = require("http");

const server = http.createServer(function(req,res){
    //writeHead() sets the response status code and headers
    res.writeHead(200,{"Content-type":"text/plain"});
    //end() sends the response body and close the response
    //req.method tells the HTTP method, such as GET & POST
    res.end("Method:"+req.method+"\nURL:"+req.url);
});

server.listen(3001,function(){
    console.log("Server is running at http://localhost:3001");
});