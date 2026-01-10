#  ####### Option A: Use PM2 Process Manager (Recommended)
# Install PM2 globally
npm install -g pm2

# Create ecosystem.config.js
module.exports = {
  apps: [{
    name: 'your-app',
    script: 'dist/index.js',  # Your compiled entry point
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# ####### Option B: Use Node.js Directly with systemd
# Create a service file: /etc/systemd/system/your-app.service
[Unit]
Description=Your Node.js App
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/your-app
ExecStart=/usr/bin/node dist/index.js
Restart=on-failure

[Install]
WantedBy=multi-user.target

# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable your-app
sudo systemctl start your-app