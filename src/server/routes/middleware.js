// Middleware module
var _express = require('express');
var _router  = _express.Router();

// middleware that is specific to this router
_router.use(function(req, res, next) {
  	console.log(req.ip + ' ' + req.method + ' ' + req.path + ' ' + Date().toString());
  	next();
});

module.exports = _router;
