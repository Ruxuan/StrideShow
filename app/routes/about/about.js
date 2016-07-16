var _express = require('express');
var _router  = _express.Router();

// define the about route
_router.get('/', function(req, res) {
  	res.send('About birds');
});

module.exports = _router;