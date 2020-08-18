module.exports = {
  apps: [{
    name: 'champagne_overview',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-223-97-145.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/front-end-capstone.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ATX-50-Team-Best-Buy/productInfo-photos_service.git',
      path: '/home/ubuntu/champagne_overview',
      'post-deploy': 'npm install && cd client && npm install && npm run build && cd .. && pm2 startOrRestart ecosystem.config.js'
    }
  }
}