// Routes controller module that loads all the paths
var _express = require('express');
var _router  = _express.Router();

// middleware that is specific to this router
_router.use('/', require('./middleware'));

//*************************************************
// define the home page route
//*************************************************
// Router imports

_router.use('/login', require('./login/login.js'));
_router.use('/api', require('./api/api.js'));
_router.get('/*', require("./demo/demo.js"));

//*************************************************
// Router export
module.exports = _router;
