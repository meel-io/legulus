const http = require('http')
const { Dispatcher } = require('ventilator')
const Pino = require('pino')

const { DISPATCHER_PORT, DISPATCHER_SERVER_HOST, DISPATCHER_SERVER_PORT } = process.env

const main = () => {
  http.createServer(handle, { hostname: DISPATCHER_SERVER_HOST })
    .listen(DISPATCHER_SERVER_PORT)
}

const handle = (req, res) => {
  if (req.method === 'POST') {
    post(req, res)
    return
  }
  reject(405, 'Method Not Allowed', res)
}

const post = (req, res) => {
  const size = parseInt(req.headers['content-length'], 10)
  if (isNaN(size)) {
    reject(400, 'Bad Request', res)
    return
  }

  const dispatcher = new Dispatcher(DISPATCHER_PORT, new Pino())
  dispatcher.run(req)
}

const reject = (code, msg, res) => {
  res.statusCode = code
  res.end(msg)
}

main()
