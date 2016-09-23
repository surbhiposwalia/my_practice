var server=require('hello_server/hello_server.js');

server.listen(process.env.PORT||8080, process.env.IP);