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
	"src/data/sample-presentations/universe/universe.json",
	"src/data/sample-presentations/global-warming/global-warming.json",
	"src/data/sample-presentations/instructions/instructions.json",
	"src/data/sample-presentations/impress-intro/impress-intro.json",
	"src/data/sample-presentations/vault/vault.json"
	].map(pathName => path.resolve(pathName));
var TARGET_DIRECTORY = path.resolve("src/data/sample-presentations/sample-presentations.json");
// Compile presentations Function
pJson(PRESENTATION_FILES, TARGET_DIRECTORY);

// Network state
var NETWORK_STATE_DIR = path.resolve("src/data/networkState.json");

// Impress state
var IMPRESS_STATE_DIR = path.resolve("src/data/impressState.json");
//*************************************************
// Paths

// Server Side rendering
//var React = require('react');
//var ReactDOMServer = require('react-dom/server');

_router.get('/*', function(req, res) {
  try {
    var sample = JSON.parse(fs.readFileSync(TARGET_DIRECTORY, "utf-8"));

    // Compute ui state
    var UIprojectGrid = sample.map((element, index) => {
      return {
        id: element.meta_data.id,
        selected: false
      };
    });

    // UI State
    var uiState = {
      UIprojectGrid: UIprojectGrid,
      UIactiveProject: 'deselect'
    };

    // Get network state
    var networkState = JSON.parse(fs.readFileSync(NETWORK_STATE_DIR, "utf-8"));
    // Get impress state
    var impressState = JSON.parse(fs.readFileSync(IMPRESS_STATE_DIR, "utf-8"));

    // Put together render data
    var renderData = JSON.stringify({
      projects: sample,
      uiState: uiState,
      networkState: networkState,
      impressState: impressState
    });
  } catch (e) {
    console.log(e.message);
    pJson(PRESENTATION_FILES, TARGET_DIRECTORY);
  }

	// Render
	res.render('demo/demo', {
		data: renderData,
		devServer: "localhost:8080/client"
	});
});

//***********************************************
// Router imports

//***********************************************
// Router export
module.exports = _router;
