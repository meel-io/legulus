const fs = require('fs')
const { Dispatcher } = require('ventilaor')

const customPath = '../data/data.json'
const defaultPath = '../data/data.json.dist'

const { DISPATCHER_PORT } = process.env

const main = () => {
  fs.stat(customPath, (err, stats) => {
    const path = (err) ? defaultPath : customPath
    const inputStream = fs.createReadStream(path)

    const dispatcher = new Dispatcher(DISPATCHER_PORT)
    dispatcher.run(inputStream)
  })
}

main()
