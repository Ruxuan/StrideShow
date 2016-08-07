import * as names from '../../constants/actionNames';
import io from 'socket.io-client';

export const socket = io(window.strideshow.devServer, { query: 'reqRoom=true'});

export function socketInit() {
  return (dispatch) => {
    socket.on('connect', function() {
      dispatch(socketConnect());
    });

    socket.on('disconnect', function() {
      dispatch(socketDisconnect());
    });

    socket.on('error', function(object) {
      console.log('An error has occured, Socket IO\'s error event has fired');
      // object is error data
      dispatch(socketError(object));
    });

    socket.on('reconnect', function(number) {
      console.log('Successfully reconnected');
      // number is reconnection attempt number
      dispatch(socketReconnect(number));
    });

    socket.on('reconnecting', function(number) {
      console.log('Attempting to reconnect');
      // number is reconnection attempt number
      dispatch(socketReconnecting(number));
    });

    socket.on('reconnect_error', function(object) {
      console.log('An error has occured while reconnecting');
      // object is error object
      dispatch(socketReconnectError(object));
    });

    socket.on('reconnect_failed', function() {
      console.log('Reconnect failed');
      dispatch(socketReconnectFailed());
    });

    socket.on('demoRoomKey', function(data) {
      console.log('Received private room: ' + data);
      dispatch(socketReceiveRoomKey(data));
    });
  }
}

export const socketConnect = () => {
  return {
    type: names.SOCKET_CONNECT
  }
};

export const socketDisconnect = () => {
  return {
    type: names.SOCKET_DISCONNECT
  }
};

export const socketError = (error_msg) => {
  return {
    type: names.SOCKET_ERROR,
    error_msg: error_msg
  }
};

export const socketReconnect = (attempt_num) => {
  return {
    type: names.SOCKET_RECONNECT,
    attempt_num: attempt_num
  }
};

export const socketReconnecting = (attempt_num) => {
  return {
    type: names.SOCKET_RECONNECTING,
    attempt_num: attempt_num
  }
};

export const socketReconnectError = (error_msg) => {
  return {
    type: names.SOCKET_RECONNECT_ERROR,
    error_msg: error_msg
  }
};

export const socketReconnectFailed = () => {
  return {
    type: names.SOCKET_RECONNECT_FAILED
  }
};

export const socketReceiveRoomKey = (roomKey) => {
  return {
    type: names.SOCKET_RECEIVE_ROOM_KEY,
    room: roomKey
  }
};
