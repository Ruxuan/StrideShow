var _express = require('express');
var _router  = _express.Router();
var fs       = require('fs');
var path     = require('path');

// middleware for demos
// _router.use('/', require('./middleware'));

//*************************************************

// Compile sample presentations into one json file
var TARGET_DIRECTORY   = path.resolve("data/sample-presentations/sample-presentations.json");

//*************************************************
// Paths

_router.get('/', function(req, res) {
	var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));
	res.json(sample);
});

//***********************************************
// Router imports

//***********************************************
// Router export
module.exports = _router;
