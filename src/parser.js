const getSection = (sectionName, html) => {
  return html(`div:contains('${sectionName}')`).closest('section')
}

const getNutrition = (html) => {
  return getSection('Nutrition', html).children('tr').toArray()
}

module.exports = { getNutrition, getSection }
