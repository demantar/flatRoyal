const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);

const path = require('path');

const grouper = require('./server/grouper');

app.use(express.static(path.join(__dirname, "client")));
http.listen(3000, "192.168.1.168", () => {
  console.log("listening on: 192.168.1.168:3000");
});

let totalUsers = 0;

io.on('connection', (socket) => {
  totalUsers ++;
  console.log("A user connected. Now there are " + totalUsers + " sockets");
  grouper(socket, io);
  socket.on('dissconect', () => {
    totalUsers--;
    console.log("A user connected. Now there are " + totalUsers + " sockets");
  });
});
