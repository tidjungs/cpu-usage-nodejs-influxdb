const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('message', function incoming(data) {
  console.log(data);
});

ws.on('close', function close() {
  console.log('disconnected');
});