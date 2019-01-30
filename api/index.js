require('dotenv-extended').load(); // Expose environment variables on this document
const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const server = http.createServer(app);

// Handlers
const Vehicle = require('./handlers/vehicle');

// Middlewares

// Vehicles Endpoints
app.get('/api/vehicle', Vehicle.list);
app.get('/api/vehicle/:id', Vehicle.details);

app.get('*', Vehicle.welcome);

server.listen(process.env.PORT, process.env.HOST, (e) => {
  if (e) console.error('API Down: ', e);
  console.info(`🖥️ API up at: ${process.env.HOST}:${process.env.PORT}`);
});
