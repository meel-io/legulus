const { Sink } = require('ventilator')
const Pino = require('pino')

const { SINK_PORT } = process.env

const main = () => {
  const sink = new Sink(SINK_PORT, new Pino())
  sink.run()
}

main()
