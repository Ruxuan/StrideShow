var _express = require('express');
var _router  = _express.Router();
var fs       = require('fs');
var path     = require('path');
var pJson    = require('json-packager');


// middleware for demos
// _router.use('/', require('./middleware'));

//*************************************************

var PRESENTATION_FILES = [
  "src/data/sample-presentations/universe/universe.json",
  "src/data/sample-presentations/global-warming/global-warming.json",
  "src/data/sample-presentations/instructions/instructions.json",
  "src/data/sample-presentations/impress-intro/impress-intro.json",
  "src/data/sample-presentations/vault/vault.json"
].map(pathName => path.resolve(pathName));
// Compile sample presentations into one json file
var TARGET_DIRECTORY = path.resolve("src/data/sample-presentations/sample-presentations.json");

//*************************************************
// Paths

_router.get('/', function(req, res) {
  var sample;
  	try {
    	sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));
  	} catch (e) {
    	console.log(e.message);
    	pJson(PRESENTATION_FILES, TARGET_DIRECTORY);
  	}
	res.json(sample);
});

//***********************************************
// Router imports

//***********************************************
// Router export
module.exports = _router;
