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
		"data/sample-presentations/universe/universe.json",
		"data/sample-presentations/global-warming/global-warming.json",
		"data/sample-presentations/instructions/instructions.json",
		"data/sample-presentations/impress-intro/impress-intro.json"
	].map(pathName => path.resolve(pathName));

var TARGET_DIRECTORY   = path.resolve("data/sample-presentations/sample-presentations.json");

// Compile presentaitons Function
pJson(PRESENTATION_FILES, TARGET_DIRECTORY);

//*************************************************
// Paths
//var React = require('react');
//var ReactDOMServer = require('react-dom/server');

_router.get('/', function(req, res) {
	var sample = fs.readFileSync(TARGET_DIRECTORY, "utf-8");

	// Compute ui state
	var json = JSON.parse(sample);
	var UIprojectGrid = json.map((element, index) => {
		return {
			id: element.meta_data.id,
			selected: false
		}
	});

	var uiState = JSON.stringify({
		UIprojectGrid: UIprojectGrid,
		UIactiveProject: 'deselect'
	});

	// Put together render data
	var renderData = {
		initialState: sample,
		uiState: uiState,
		devServer: 'http://abcdeghi.ngrok.io/demo'
	};

	// Render
	res.render('demo/demo', renderData);
});

//***********************************************
// Router imports

//***********************************************
// Router export
module.exports = _router;
