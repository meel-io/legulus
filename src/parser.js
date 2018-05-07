const cheerio = require('cheerio')

const getSection = (sectionName, html) => {
  return html(`h3:contains('${sectionName}')`).closest('section')
}

const getNutrition = (html) => {
  const section = getSection('Nutrition', html)

  const allRows = section.find('tbody').children('tr').toArray()

  allRows.splice(-1, 1)

  return allRows.reduce((result, row) => {
    const parsedRow = cheerio.load(row)

    const key = parsedRow('td:nth-child(1)').text()
    const value = parsedRow('td:nth-child(2)').text()

    result[key.toLowerCase()] = parseFloat(value)

    return result
  }, {})
}

module.exports = { getNutrition }
