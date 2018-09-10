const os = require('os-utils');

setInterval(() => {
  os.cpuUsage(function (v) {
    console.log('CPU Usage (%): ' + v);
  });
}, 500)
