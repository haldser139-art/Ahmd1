const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    status: "ok",
    message: "API يعمل بنجاح",
    owner: "Ahmd"
  }));
});

// مهم جدًا لـ Render
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("API running on port " + PORT);
});
