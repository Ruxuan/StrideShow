var PORT     = 8080;
var path     = require('path');
var templates = [
  path.join(__dirname, '/static/templates'),
  path.join(__dirname, '/static/layouts')
];

var _express = require('express');
var _app     = _express();
	// Static file location
	_app.use(_express.static(path.join(__dirname, '/public')));
	// Data
	_app.set('views', templates);
	_app.set('view engine', 'html');

// ********************************************************
// Socket IO configurations
var _http = require('http').Server(_app);
var _io   = require('socket.io')(_http);
require('./server/socket/sockets.js')(_app, _io);

// ********************************************************
// Express middleware tool configurations

// Body parser
var _bodyParser = require('body-parser');
	// Body parser
	_app.use(_bodyParser.json());
	_app.use(_bodyParser.urlencoded({ extended: true }));

var _cookieParser = require('cookie-parser');
	_app.use(_cookieParser());

// ********************************************************
// Nunjucks template configuration

var _nunjucks = require('nunjucks');
	// nunjucks initialization
	_nunjucks.configure(_app.get('views'), {
		autoescape: true,
		watch     : true,
		express   : _app
	});

// ********************************************************
// TODO: How to load project's models?

// ********************************************************
// TODO: Authentication
// See reactstarterkit for passport js

// expressJWT reactstarterkit
//*********************************************************
// TODO: the following stuff
// graphQL ? reactstarterkit
// Register server-side rendering middleware reactstarterkit
// Error handling from reactstarterkit

//*********************************************************
// Pass information
var webpack = require('webpack');
var config = require('../tools/webpack.config.dev.js');
var compiler = webpack(config);
_app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
_app.use(require('webpack-hot-middleware')(compiler));

_app.use('/', function(req, res, next) {
	res.locals.rootDirectory = __dirname;
	res.locals.port          = PORT;
	next();
});

// ********************************************************
// Routers
_app.use('/', require('./server/routes/index'));

// ********************************************************
// Listen
_http.listen(PORT, function() {
	console.log('Listening to ' + PORT);
});
