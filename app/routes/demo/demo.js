var _express = require('express');
var _router  = _express.Router();
var fs       = require('fs');
var pJson    = require('json-packager');
var path     = require('path');

// middleware for demos
// _router.use('/', require('./middleware'));

//*************************************************
// Compile Data

// Compile sample presentations into one json file
var PRESENTATION_FILES = [
		"dynamic/sample-presentations/global-warming/global-warming.json",
		"dynamic/sample-presentations/universe/universe.json",
		"dynamic/sample-presentations/instructions/instructions.json"
	]
	.map(pathName => path.resolve(pathName));

var TARGET_DIRECTORY   = path.resolve("dynamic/sample-presentations/sample-presentations.json");

// Compile Function
pJson(PRESENTATION_FILES, TARGET_DIRECTORY);

//*************************************************
// Paths

_router.get('/', function(req, res) {
	res.render('demo/demo');
});

_router.get('/sample-presentations', function(req, res) {
	var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));

	res.set('Content-Type', 'text/json');
	res.json(sample);
});

_router.get('/instructions', function(req, res) {
	var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));

	res.set('Content-Type', 'text/html');
	res.render('impress.html', sample[2]);
});

//***********************************************

_router.get('/global-warming', function(req, res) {
	var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));

	res.set('Content-Type', 'text/html');
	res.render('impress.html', sample[0]);
});

_router.get('/universe', function(req, res) {
	var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));

	res.set('Content-Type', 'text/html');
	res.render('impress.html', sample[1]);
});

//***********************************************
// Router imports

//***********************************************
// Router export
module.exports = _router;