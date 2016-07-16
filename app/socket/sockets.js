module.exports = function(app, io) {
	var demo = require('./demo/demo-socket.js')(app, io);
	//var user = require('./user/user-socket.js')(app, io);
};