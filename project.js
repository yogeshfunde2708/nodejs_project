const http = require("http");
const User = require('./user');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
    resp.write(JSON.stringify(User));
    resp.end();
}).listen(5000);