const http = require('http');
const os = require('os');

const hostname = os.hostname();
const ip = require('ip'); // For external IP

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <h1>Hello from Node.js applications</h1>
    <p><strong>Hostname:</strong> ${hostname}</p>
    <p><strong>IP Address:</strong> ${ip.address()}</p>
  `);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://${ip.address()}:${port}/`);
});
