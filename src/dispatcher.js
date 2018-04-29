const fs = require('fs')
const path = require('path')
const { Dispatcher } = require('ventilator')
const Pino = require('pino')

const customPath = path.join(__dirname, '../data/data.json')
const defaultPath = path.join(__dirname, '../data/data.json.dist')

const { DISPATCHER_PORT } = process.env

const main = () => {
  fs.stat(customPath, (err, stats) => {
    const fileName = (err) ? defaultPath : customPath
    const inputStream = fs.createReadStream(fileName)

    const dispatcher = new Dispatcher(DISPATCHER_PORT, new Pino())
    dispatcher.run(inputStream)
  })
}

main()
