var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'qwertyuiop' }, function(err, tunnel) {
  console.log('LT running')
});