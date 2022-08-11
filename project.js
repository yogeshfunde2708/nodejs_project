const http = require("http");
const User = require("./user");
const fs = require("fs");
http.createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "applicationjson" });
    resp.write(JSON.stringify(User));
    

    if ((req.url = "/userapi")) {
      fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
        console.log(data);
      });
      resp.end("Hello from the user api sides");
    } else {
      resp.writeHead(200, { "content-type": "applicationjson" });
      resp.end("<h2> 200 error page. page doesn't exist </h1>");
    }
    resp.end();
  })
  .listen(5000);
console.log("server started at port 5000");
