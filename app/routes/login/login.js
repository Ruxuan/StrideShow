var _express = require('express');
var _router  = _express.Router();

// define the about route
_router.get('/', function(req, res) {
  	res.render('login/login');
});

module.exports = _router;