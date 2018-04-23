const { dispatcher, sink } = require('ventilator')
const { fork } = require('child_process')
const { getInputs } = require('./input')

const run = ({numberOfWorkers, dispatcherPort, sinkPort }) => {
  fork(dispatcher.run(getInputs(), dispatcherPort))
  fork(sink.run(sinkPort))
}

module.exports = { run }