module.exports = {
  apps: [{
    name: 'restful-server',
    script: 'dist/index.js',  // Your compiled entry point
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3300
    }
  }]
};
