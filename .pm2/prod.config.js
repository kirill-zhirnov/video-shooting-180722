const path = require('path');

module.exports = {
  apps: [
    {
      name: 'app-example',
      cwd: path.dirname(path.dirname(__filename)),
      script: 'index.js',
      instances: 0,
      exec_mode: 'cluster',
      watch: false,
      merge_logs: true,
    }
  ]
};
