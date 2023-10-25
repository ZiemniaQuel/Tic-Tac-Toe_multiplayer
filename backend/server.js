const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});