const os = require('os-utils');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function (ws, req) {
  const ip = req.connection.remoteAddress;
  const port = req.connection.remotePort;
  ws.isAlive = true
  console.log(ip, port)
  const interval = setInterval(() => {
    os.cpuUsage(function (v) {
      if (ws.isAlive) {
        ws.send(v);
      }
    });
  }, 100)
  ws.on('close', function () {
    ws.isAlive = false;
    clearInterval(interval)
  })
});
