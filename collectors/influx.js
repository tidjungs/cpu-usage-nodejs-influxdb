const os = require('os-utils');
const Influx = require('influx');

const influx = new Influx.InfluxDB({
	host: 'localhost',
	database: 'cpu',
	schema: [
		{
			measurement: 'cpu_usage',
			fields: {
				percentage: Influx.FieldType.FLOAT,
			},
			tags: []
		}
	]
})

setInterval(() => {
	os.cpuUsage(function (v) {
		console.log('CPU Usage (%): ' + v);
		influx.writePoints([
			{
				measurement: 'cpu_usage',
				fields: { percentage: v },
			}
		])
	});
}, 500)
