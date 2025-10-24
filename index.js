#!/usr/bin/env node

const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
    <html>
      <head>
        <title>Node.js Razd Example</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          h1 { color: #333; }
          p { color: #666; }
        </style>
      </head>
      <body>
        <h1>🚀 Hello from Razd!</h1>
        <p>This is a Node.js project set up with Razd CLI</p>
        <p>Server is running on port ${port}</p>
        <p>Time: ${new Date().toISOString()}</p>
      </body>
    </html>
  `);
});

server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
    console.log(`📝 Razd setup complete! Use 'razd task dev' to start development.`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 Shutting down server...');
    server.close(() => {
        console.log('✅ Server stopped');
        process.exit(0);
    });
});
