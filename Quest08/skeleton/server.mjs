import http from "http";
import url from "url";

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);
  if (req.method === "POST" && pathname === "/foo") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        if (data && data.bar) {
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end(`Hello, ${data.bar}`);
        }
      } catch (err) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("Invalid JSON format");
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
  }
});

server.listen(8080);
