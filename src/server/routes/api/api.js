var _express = require('express');
var _router  = _express.Router();
var fs       = require('fs');
var path     = require('path');
var pJson    = require('json-packager');


// middleware for demos
// _router.use('/', require('./middleware'));

//*************************************************

var PRESENTATION_FILES = [
  "data/sample-presentations/universe/universe.json",
  "data/sample-presentations/global-warming/global-warming.json",
  "data/sample-presentations/instructions/instructions.json",
  "data/sample-presentations/impress-intro/impress-intro.json",
  "data/sample-presentations/vault/vault.json"
].map(pathName => path.resolve(pathName));
// Compile sample presentations into one json file
var TARGET_DIRECTORY   = path.resolve("data/sample-presentations/sample-presentations.json");

//*************************************************
// Paths

_router.get('/', function(req, res) {
  try {
    var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));
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
