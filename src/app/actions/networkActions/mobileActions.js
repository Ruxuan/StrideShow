import * as names from '../../constants/actionNames';
import { socket } from './socketActions';

export function mobileInit() {
  return (dispatch) => {
    console.log('Mobile Initialization');
  }
}

export const mobileConnect = () => {
  return {
    type: names.MOBILE_CONNECT
  }
};

export const mobileDisconnect = () => {
  return {
    type: names.MOBILE_DISCONNECT
  }
};

export const mobileActiveProject = () => {
  return {
    type: names.MOBILE_ACTIVE_PROJECT
  }
};

export const mobileDeviceInfo = () => {
  return {
    type: names.MOBILE_DEVICE_INFO
  }
};
