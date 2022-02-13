const express = require('express');
const http = require('http');
const config = require('./config/config');
const routes = require('./routes/index');
const bootFiles = require('./boot-files');

const app = express();

app.use(express.json());

routes(app);

httpServer = http.createServer(app);

httpServer.listen(config.ServerPort, async () => {
  console.log(`🚀 Server ready at http://localhost:${config.ServerPort}/`);
  await bootFiles();
});