var http = require("http");
var tanggal = require("./tanggal");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("Hari Ini Tanggal " + tanggal.mydateTime());
    res.end();
  })
  .listen(8080);
