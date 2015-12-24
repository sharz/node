var http=require('http');
var userCount=0;
http.createServer(function(request,response)
{
console.log('new connection');
userCount++;
response.writeHead(200,{'Content-Type':'text/plain'});
response.write('Hello world\n');
response.write('We have had '+userCount+' visit!\n');
response.end();
}).listen(8080);
console.log('Server started');
