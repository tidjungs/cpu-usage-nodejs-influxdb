const express = require('express')
const app = express()
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

app.get('/last', (req, res) => {
  influx.query(`
    select last(*) from cpu_usage
  `).then(data => {
      res.send(data.pop())
    })
})

app.get('/series', (req, res) => {
  influx.query(`
    select * from cpu_usage
  `).then(data => {
      res.send(data)
    })
})

app.listen(3000, () => console.log('API listening on port 3000!'))