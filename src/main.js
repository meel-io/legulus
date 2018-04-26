const main = require('commander')
const { prompt, Separator } = require('inquirer')
const { createInput } = require('./input')

const questions = [
  {
    type: 'checkbox',
    message: 'Select products',
    name: 'products',
    choices: [
      new Separator(' = Breakfast = '),
      {
        name: 'Granola'
      },
      {
        name: 'Oats'
      },
      {
        name: 'Apple'
      },
      {
        name: 'Yogurt'
      },
      new Separator(' = Lunch = '),
      {
        name: 'Pasta'
      },
      {
        name: 'Sandwich'
      }
    ],
    validate: (answer) => {
      if (answer.length < 1) {
        return 'You must choose at least one product.'
      }
      return true
    }
  }
]

main
  .version('0.1.0')
  .command('start')
  .action((products, cmd) => {
    prompt(questions).then(options => {
      createInput(options)
    })
  })

main.parse(process.argv)
