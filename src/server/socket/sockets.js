module.exports = function(app, io) {
	var demo = require('./demo/demoSocket.js')(app, io);
	//var user = require('./user/user-socket.js')(app, io);
};
