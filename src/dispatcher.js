const Hapi = require('hapi')
const { Dispatcher } = require('ventilator')
const Pino = require('pino')

const { DISPATCHER_LISTEN, DISPATCHER_HOST, DISPATCHER_PORT } = process.env

const server = Hapi.server({
  host: DISPATCHER_HOST,
  port: DISPATCHER_LISTEN
})

server.route({
  method: 'POST',
  path: '/',
  handler: (request) => {
    const dispatcher = new Dispatcher(DISPATCHER_PORT, new Pino())
    dispatcher.run(request)
  }
})

async function start () {
  try {
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', server.info.uri)
};

start()
