const request = require('request-promise-native')
const cheerio = require('cheerio')

const scrap = (url) => {
  var options = {
    uri: url,
    transform: function (body) {
      return cheerio.load(body)
    }
  }

  return request(options)
}

module.exports = { scrap }
