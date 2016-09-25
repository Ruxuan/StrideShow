/**
 * Created by liruxuan on 2016-09-25.
 */
var _express = require('express');
var _router  = _express.Router();

// middleware for apps
// _router.use('/', require('./middleware'));

//*************************************************
// Paths

_router.get('/', function(req, res) {
  res.render('app/app');
});

//***********************************************
// Router export
module.exports = _router;
