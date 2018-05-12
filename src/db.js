const { MongoClient } = require('mongodb')

const { DATABASE_URL, DATABASE_NAME } = process.env

const connect = async () => {
  const client = await MongoClient.connect(DATABASE_URL).catch(error => {
    throw error
  })

  return client
}

const persistProduct = async product => {
  const client = await connect().catch(error => {
    return {
      error: new Error(`Could not connect to the database: ${error.message}`)
    }
  })

  const db = client.db(DATABASE_NAME)
  await db.collection('products').insertOne(product).catch(error => {
    return {
      error: new Error(`Could not insert product to the database: ${error.message}`)
    }
  })

  client.close()
}

module.exports = { persistProduct }
