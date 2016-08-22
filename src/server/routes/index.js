// Routes controller module that loads all the paths
var _express = require('express');
var _router  = _express.Router();

// middleware that is specific to this router
_router.use('/', require('./middleware'));

//*************************************************
// Paths

// define the home page route
_router.get('/', function(req, res) {
	res.render('index');
});

//*************************************************
// Router imports

//_router.use('/', require('./products'));
_router.use('/demo', require('./demo/demo.js'));
//_router.use('/', require('./smartPhoneApps'));
//_router.use('/', require('./pricing'));
//_router.use('/', require('./contact'));
_router.use('/about', require('./about/about.js'));
_router.use('/login', require('./login/login.js'));
_router.use('/api', require('./api/api'));

//*************************************************
// Router export
module.exports = _router;
