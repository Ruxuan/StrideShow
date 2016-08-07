import * as names from '../../constants/actionNames';

const socketReducer = (state={}, action) =>  {
  switch (action.type) {
    case names.SOCKET_CONNECT:
    case names.SOCKET_DISCONNECT:
      return {
        ...state,
        status: action.type
      };
    case names.SOCKET_RECONNECT:
    case names.SOCKET_RECONNECTING:
      return {
        ...state,
        status: action.type,
        attempt: action.attempt_num
      };
    case names.SOCKET_ERROR:
    case names.SOCKET_RECONNECT_ERROR:
      return {
        ...state,
        status: action.type,
        error_msg: status.error_msg
      };
    case names.SOCKET_RECONNECT_FAILED:
      return {
        ...state,
        status: action.type
      };
    case names.SOCKET_RECEIVE_ROOM_KEY:
      return {
        ...state,
        room: action.room
      };
    default:
      return state;
  }
};

export default socketReducer;
