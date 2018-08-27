const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);

const path = require('path');

const grouper = require('./server/grouper');

app.use(express.static(path.join(__dirname, "client")));
http.listen(3000, () => {
  console.log("listening on port :3000");
});

io.on('connection', (socket) => {
  console.log("A user connected.");
  grouper(socket, io);
  socket.on('dissconect', () => {
    console.log("A user dissconntected");
  });
});
