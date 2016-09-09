/*
  Structure

  clientConnections[roomKey] = {
		'room'   : socket.id, // String
		'socket' : socket     // Socket Object
	};

	mobileConnections[mobile socket id] = {
	  'socket' : socket // SocketIO object
	}
*/

var clientConnections = {};
var mobileConnections = {};

function removeFromGuestSockets(roomKey) {
	delete clientConnections[roomKey];
}

function getRoomKeyBySocketId(room) {
  return Object.keys(clientConnections).find(key => clientConnections[key].room === room);
}

function getRoom(socketId) {
  if (clientConnections[socketId] === undefined) {
    return;
  }

  return clientConnections[socketId].room;
}

module.exports = function(app, io) {
	var demo = io.of('/demo');
	demo.on('connection', function(socket) {
		console.log('Connected /demo');

		socket.on('disconnect', function() {
			console.log('Disconnected /demo');

      // TODO: differentiate between client and mobile
      // Mobile disconnect


      // Delete entries
			removeFromGuestSockets(getRoomKeyBySocketId(socket.id));
		});

		// Core *****************************************************

		// Generate private roomKeys
		if (socket.handshake.query.reqRoom === "true") {
			// Generate a private room key for client

			var roomKey = require('../roomKeyGenerator')(clientConnections);

			if (roomKey === -1) {
				// Emit no demoRooms left
				console.log("No demoRooms left");
			} else if (roomKey === -2) {
				// Emit
				// Many users online right now
				// Try again later
				console.log("Too many users online, try again later");
			} else {

				clientConnections[roomKey] = {
					'room'   : socket.id,
					'socket' : socket
				};

				// Send client the private room key
				socket.emit('demoRoomKey', roomKey);
			}
		}

		// Event Listeners ******************************************

		socket.on('requestRoom', function(data, callback) {
		  console.log('Room requested');

      if (clientConnections[data.roomKey] === undefined) {
        return;
      }

      // Switch key to mobile socket id, keep old key so it can't be overwritten
      clientConnections[socket.id] = clientConnections[data.roomKey];

      // TODO: Use callback instead
			demo.to(socket.id).emit("respondRoom",
				{
					room: clientConnections[data.roomKey].room,
					referer: clientConnections[data.roomKey].socket.handshake.headers.referer
				});

      // Tell computer about connection
      var room = getRoom(socket.id);
      demo.to(room).emit("mobileConnect");
      demo.to(room).emit("mobileDeviceInfo", data.deviceInfo);
		});

		// Impress JS commands **************************************

		socket.on('next', function(data) {
			var room = getRoom(socket.id);
			demo.to(room).emit('next');
		});

		socket.on('prev', function(data) {
      var room = getRoom(socket.id);
      demo.to(room).emit('prev');
		});

		socket.on('goto', function(data) {
			//
			//socket.emit('goto', data);
		});

    socket.on('laserPointer', function(data) {
      var room = getRoom(socket.id);
      demo.to(room).emit('laserPointer', data);
    });
	});
};
