const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    status: "ok",
    message: "هذا API خاص بي",
    owner: "Ahmd"
  }));
});

server.listen(3000, () => {
  console.log("API running on port 3000");
});
