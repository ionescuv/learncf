// Bring in our dependencies
const srv = require('express')();
const routes = require('./routes');
var bodyParser = require('body-parser');

// parse request payload
srv.use(bodyParser.json());

//  Connect all our routes to our application
srv.use('/', routes);

//error handler middleware
/*
srv.use(function(err, req, res, next){
  res.status(400).json(err);
});
*/

// Bring in the module providing the wrapper for cf env
var cfenvWr = require('./cfenv-wrapper');

// get the cloud foundry environment variables
var appEnv = cfenvWr.getAppEnv();
var port = appEnv.port || 3000;

// Turn on that server!
srv.listen(port, () => {
  console.log('Server listening on port %s', port);
});