var socket = io('http://c6c586e6.ngrok.io/demo', { query: 'reqRoom=true' });
var api    = impress();

// Core ***********************************************************************
socket.on('connect', function() {
	console.log("Connected");
	api.init();
});

socket.on('disconnect', function() {
	console.log('Disconnect');
});

socket.on('error', function(object) {
	console.log('An error has occured, Socket IO\'s error event has fired');
	// object is error data
});

socket.on('reconnect', function(number) {
	console.log('Successfully reconnected');
	// number is reconnection attempt number
});

socket.on('reconnecting', function(number) {
	console.log('Attempting to reconnect');
	// number is reconnection attempt number
});

socket.on('reconnect_error', function(object) {
	console.log('An error has occured while reconnecting');
	// object is error object
});

socket.on('reconnect_failed', function() {
	console.log('Reconnect failed');
});

// Impress ********************************************************************
socket.on('demoRoomKey', function(data) {
	console.log('Received private room: ' + data);
});

socket.on('next', function(data) {
	console.log('API NEXT');
	api.next();
});

socket.on('prev', function(data) {
	console.log('API PREV');
	api.prev();
});

socket.on('goto', function(data) {
	console.log('API GOTO');
	//api.goto(data);
});