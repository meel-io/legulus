const { Worker } = require('ventilator')
const { scrapProduct } = require('./product')
const { persistProduct } = require('./db')
const Pino = require('pino')

const { DISPATCHER_PORT, SINK_PORT } = process.env

const doSomething = async (row) => {
  const product = await scrapProduct(row)

  await persistProduct(product)
}

const main = () => {
  const worker = new Worker(doSomething, new Pino())
  worker.run(DISPATCHER_PORT, SINK_PORT)
}

main()
