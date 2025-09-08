const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/getNoData") {
    res.end("There is no data");
  }
  res.end("Hello World");
});

server.listen(8888);
