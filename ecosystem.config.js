module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'DISPATCHER',
      script: 'src/dispatcher.js',
      env: {
        'DISPATCHER_SERVER_HOST': 'localhost',
        'DISPATCHER_SERVER_PORT': '3000',
        'DISPATCHER_PORT': '5016'
      }
    },
    {
      name: 'SINK',
      script: 'src/sink.js',
      env: {
        'SINK_PORT': '5017'
      }
    },
    {
      name: 'WORKER',
      script: 'src/worker.js',
      instances: 2,
      exec_mode: 'fork',
      env: {
        'DISPATCHER_PORT': '5016',
        'SINK_PORT': '5017'
      }
    }
  ]
}
