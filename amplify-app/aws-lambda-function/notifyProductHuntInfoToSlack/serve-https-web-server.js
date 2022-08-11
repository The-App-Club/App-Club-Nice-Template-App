const https = require("https");
const fs = require("fs");
const ssl_server_key = "server_key.pem";
const ssl_server_crt = "server_crt.pem";
const port = 8443;

const options = {
  key: fs.readFileSync(ssl_server_key),
  cert: fs.readFileSync(ssl_server_crt),
};

https
  .createServer(options, function (req, res) {
    res.writeHead(200, {
      "Content-Type": "text/plain",
    });
    res.end("Hello, world\n");
  })
  .listen(port);
