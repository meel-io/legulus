const { scrap } = require('./scrapper')
const { getNutrition } = require('./parser')

const PRODUCT_URL = 'https://www.tesco.com/groceries/en-GB/products/'

const scrapProduct = async (id) => {
  const productUrl = getUrl(id)

  const response = await scrap(productUrl).catch(error => {
    throw new Error(`Could not scrap product from website: ${error.message}`)
  })

  return {
    id,
    nutrition: getNutrition(response)
  }
}

const getUrl = (id) => {
  if (!id) {
    throw new Error('Product Id not valid')
  }

  return `${PRODUCT_URL}${id}`
}

module.exports = { scrapProduct }
