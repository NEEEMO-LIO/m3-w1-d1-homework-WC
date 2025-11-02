const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
  // Ignore query string when matching
  const path = req.url.split('?')[0];

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Home Page.</h1>');
  } else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>About Page.</h1>');
  } else if (path === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Contact Page.</h1>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Invalid Request!');
  }
});

server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running….`);
});