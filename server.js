

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!");
});

// Cambia "Esto es un mensaje de prueba" por "localhost" o una dirección IP válida
server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});