/*
  Structure

  guestSockets[roomKey] = {
		'room'   : socket.id, // String
		'socket' : socket     // Socket Object
	};
*/
var guestSockets = {};
var low          = 1000;
var high         = 2000;

function isUnique(roomKey) {
	var keys = Object.keys(guestSockets);
	var len  = keys.length;

	for(var i = 0; i < len; i++) {
		// keys[i] is a string
		// roomKey is an integer
		if (keys[i] == roomKey) {
			return false;
		}
	}

	return true;
}

function randomInt() {
	return Math.floor(Math.random() * (high - low + 1) + low);
}

function randomRoomKey() {
	// Checks if we reached full connection capacity
	if (Object.keys(guestSockets).length > (high - low + 1)) {
		// Reached full connection capacity, return -1
		return -1;
	}

	var randKey = randomInt();

	// Random key search limit
	var counter  = 0;
	var limit    = 10;

	// Loop until unique key is found or limit is reached
	while (!isUnique(randKey)) {
		if (counter <= limit) {
			randKey = randomInt();
			counter++;
		} else {
			// Too many users online right now
			// Difficult to find unique key
			// Try again later
			return -2;
		}
	}

	// Return unique key
	return randKey;
}

function removeFromGuestSockets(roomKey) {
	delete guestSockets[roomKey];
}

function getRoomKeyBySocketId(room) {
  return Object.keys(guestSockets).find(key => guestSockets[key].room === room);
}

function getRoom(socketId) {
  if (guestSockets[socketId] === undefined) {
    return;
  }

  return guestSockets[socketId].room;
}

module.exports = function(app, io) {
	var demo = io.of('/demo');
	demo.on('connection', function(socket) {
		console.log('Connected /demo');

		socket.on('disconnect', function() {
			console.log('Disconnected /demo');
			removeFromGuestSockets(getRoomKeyBySocketId(socket.id));
		});

		// Core *****************************************************

		// Generate private roomKeys
		if (socket.handshake.query.reqRoom === "true") {
			// Generate a private room key for client
			var roomKey = randomRoomKey();

			if (roomKey === -1) {
				// Emit no demoRooms left
				console.log("No demoRooms left");
			} else if (roomKey === -2) {
				// Emit
				// Many users online right now
				// Try again later
				console.log("Too many users online, try again later");
			} else {

				guestSockets[roomKey] = {
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

      if (guestSockets[data.roomKey] === undefined) {
        return;
      }

      // Switch key to mobile socket id, keep old key so it can't be overwritten
      guestSockets[socket.id] = guestSockets[data.roomKey];

      // TODO: Call callback instead
			demo.to(socket.id).emit("respondRoom",
				{
					room: guestSockets[data.roomKey].room,
					referer: guestSockets[data.roomKey].socket.handshake.headers.referer
				});
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
