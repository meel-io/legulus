const { MongoClient } = require('mongodb')

const { DATABASE_URL, DATABASE_NAME } = process.env

const connect = async () => {
  const client = await MongoClient.connect(DATABASE_URL).catch(error => {
    throw error
  })

  return client.db(DATABASE_NAME)
}

module.exports = { connect }
