const { scrap } = require('./scrapper')
const { getNutrition } = require('./parser')

const PRODUCT_URL = 'https://www.tesco.com/groceries/en-GB/products/'

const scrapProduct = async (id) => {
  const productUrl = getUrl(id)

  const response = await scrap(productUrl)

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
