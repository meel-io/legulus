module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'DISPATCHER',
      script: 'src/dispatcher.js'
    },
    {
      name: 'SINK',
      script: 'src/sink.js'
    },
    {
      name: 'WORKER',
      script: 'src/worker.js'
    }
  ]
}
