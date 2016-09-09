/**
 * Created by liruxuan on 2016-09-07.
 */

// Int range for room num
var low  = 1000;
var high = 2000;

function isUnique(roomKey, clientConnections) {
  var keys = Object.keys(clientConnections);
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

function randomRoomKey(clientConnections) {
  // Checks if we reached full connection capacity
  if (Object.keys(clientConnections).length > (high - low + 1)) {
    // Reached full connection capacity, return -1
    return -1;
  }

  var randKey = randomInt();

  // Random key search limit
  var counter  = 0;
  var limit    = 10;

  // Loop until unique key is found or limit is reached
  while (!isUnique(randKey, clientConnections)) {
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

module.exports = randomRoomKey;
