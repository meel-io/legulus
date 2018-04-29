const { Worker } = require('ventilator')
const Pino = require('pino')

const { DISPATCHER_PORT, SINK_PORT } = process.env

const doSomething = (row) => {
  return row
}

const main = () => {
  const worker = new Worker(doSomething, new Pino())
  worker.run(DISPATCHER_PORT, SINK_PORT)
}

main()
