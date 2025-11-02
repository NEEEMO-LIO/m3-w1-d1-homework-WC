// server_task2.js
const http = require('http');
const PORT = 5000;

const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];

  if (url === '/' || url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Home</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; padding: 40px; }
          h1 { color: #b30000; font-size: 48px; margin: 0 0 12px; }
          p  { color: #666; font-size: 20px; margin: 0; }
        </style>
      </head>
      <body>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </body>
      </html>
    `);

  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>About</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; padding: 40px; }
          h1 { color: #08a045; font-size: 48px; margin: 0 0 12px; }
          p  { color: #666; font-size: 20px; margin: 0; }
        </style>
      </head>
      <body>
        <h1>About</h1>
        <p>Welcome to the about page!</p>
      </body>
      </html>
    `);

  } else if (url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Contact</title>
        <style>
          body { font-family: Arial, Helvetica, sans-serif; padding: 40px; }
          h1 { color: #1a4de8; font-size: 48px; margin: 0 0 12px; }
          p  { color: #666; font-size: 20px; margin: 0; }
        </style>
      </head>
      <body>
        <h1>Contact</h1>
        <p>Welcome to the contact page!</p>
      </body>
      </html>
    `);

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Invalid Request!');
  }
});

server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running….`);
});