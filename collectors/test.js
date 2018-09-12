const os = require('os-utils');

setInterval(() => {
  os.cpuUsage(function (v) {
    console.log(v)
  });
}, 100)