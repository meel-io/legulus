const { Readable } = require('readable-stream')
const { dataProvider } = require('./data')

const createStream = (numberOfOps, dataProvider) => {
  const rs = Readable({
    read: () => {
      rs.push(Buffer.from(JSON.stringify(dataProvider())))
      if (--numberOfOps <= 0) {
        rs.push(null)
      }
    }
  })

  return rs
}

module.exports = { createStream }