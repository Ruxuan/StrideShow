/*
  Structure

  clientConnections[roomKey] = {
		'room'   : socket.id, // String
		'socket' : socket     // SocketIO Object
	};

	mobileConnections[mobile socket id] = {
	  'socket' : socket     // SocketIO object
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

module.exports = function(app, io) {
	var client = io.of('/client');
  client.on('connection', function(socket) {
    console.log('Client Socket Connected');
    // TODO: let mobile know

    socket.on('disconnect', function() {
      console.log('Client Socket Disconnected');
      // TODO: let mobile know

      // Delete entries
      removeFromGuestSockets(getRoomKeyBySocketId(socket.id));
    });

    // Core *****************************************************


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
	});

  // Mobile sockets
  var mobile = io.of('/mobile');
  mobile.on('connection', function(socket) {
    console.log('Mobile Socket Connected');

    socket.on('disconnect', function(data) {
      console.log('Mobile Socket Disconnected');

      // Let client know about mobile disconnection
      if (mobileConnections[socket.id] !== undefined) {
        mobileConnections[socket.id].emit('mobileDisconnect');
      }

      // Remove entry from mobile connections
      delete mobileConnections[socket.id];
    });

    // Request Room
    socket.on('requestRoom', function(data, callback) {
      console.log("Mobile: Room Requested");

      // Check if socket exists
      if (clientConnections[data.roomKey] === undefined) {
        console.log("Mobile: Attempt to request a non-existent room");
        return;
      }

      // Add to mobile connections
      // TODO: make sure deep copy here
      mobileConnections[socket.id] = clientConnections[data.roomKey].socket;

      // Respond to mobile
      // TODO: use callback instead
      socket.emit("respondRoom",
        {
          room: clientConnections[data.roomKey].room
        }
      );

      // Tell client about mobile connection
      var clientSocket = mobileConnections[socket.id];
      clientSocket.emit("mobileConnect", data.mobileDeviceInfo);
    });

    // Socket on active project
    socket.on('mobileActiveProject', function(data) {
      mobileConnections[socket.id].emit('mobileActiveProject', data);
    });

    // Impress JS commands **************************************

    socket.on('next', function(data) {
      mobileConnections[socket.id].emit('next');
    });

    socket.on('prev', function(data) {
      mobileConnections[socket.id].emit('prev');
    });

    socket.on('goto', function(data) {
      //socket.emit('goto', data);
    });

    socket.on('laserPointer', function(data) {
      mobileConnections[socket.id].emit('laserPointer', data);
    });
  });
};
