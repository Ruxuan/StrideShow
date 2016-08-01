import * as names from '../constants/actionNames';

export const socketConnect = () => {
  return {
    type: names.SOCKET_CONNECT
  }
}

export const socketDisconnect = () => {
  return {
    type: names.SOCKET_DISCONNECT
  }
}
