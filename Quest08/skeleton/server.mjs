import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
});

server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
