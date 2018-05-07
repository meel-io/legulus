const { MongoClient } = require('mongodb')

const { DATABASE_URL, DATABASE_NAME } = process.env

const connect = async () => {
  const client = await MongoClient.connect(DATABASE_URL).catch(error => {
    throw error
  })

  return client
}

const persistProduct = async product => {
  const client = await connect()

  const db = client.db(DATABASE_NAME)
  await db.collection('products').insertOne(product)

  client.close()
}

module.exports = { persistProduct }
