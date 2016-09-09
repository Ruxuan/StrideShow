import * as names from '../../constants/actionNames';
import { socket } from './socketActions';

export function mobileInit() {
  return (dispatch) => {
    // Mobile socket listeners
    socket.on('mobileConnect', function(data) {
      dispatch(mobileConnect(data.model, data.sdk, data.os));
    });

    socket.on('mobileDisconnect', function() {
      dispatch(mobileDisconnect());
    });

    // Mobile active project
    socket.on('mobileActiveProject', function(data) {
      dispatch(mobileActiveProject(data.mobileActiveProject));
    });
  }
}

const mobileConnect = (model, sdk, os) => {
  return {
    type: names.MOBILE_CONNECT,
    deviceInfo: {
      OS: os,
      SDK: sdk,
      model: model,
    }
  }
};

const mobileDisconnect = () => {
  return {
    type: names.MOBILE_DISCONNECT
  }
};

const mobileActiveProject = (activeProject) => {
  return {
    type: names.MOBILE_ACTIVE_PROJECT,
    activeProject
  }
};
