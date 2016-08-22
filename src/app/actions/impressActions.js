import * as names from '../constants/actionNames';
import { socket, socketActiveProject } from './networkActions/socketActions';

export function attachSocket(title, index) {
  return (dispatch) => {

    // Dispatches
    dispatch(socketActiveProject(index));
    dispatch(impressInit(title));

    // Setup socket listeners
    socket.on('next', function (data) {
      dispatch(impressNext());
    });

    socket.on('prev', function (data) {
      dispatch(impressPrev());
    });

    socket.on('goto', function (data) {
      console.log('goto');
      //dispatch(impressGoto(data));
    });
  }
}

export function detachSocket() {
  return (dispatch) => {
    dispatch(socketActiveProject(null));
    dispatch(impressReset());

    // Remove socket listeners
    socket.off('next');
    socket.off('prev');
    socket.off('goto');
  }
}

const impressInit = (slideName) => {
  return {
    type: names.IMPRESS_INIT,
    slideName: slideName
  }
};

const impressReset = () => {
  return {
    type: names.IMPRESS_RESET
  }
};

// TODO: don't export these? what about keyboard listeners calling next?
// TODO: make checks to make sure slideIndex doesn't overflow
export const impressNext = () => {
  return {
    type: names.IMPRESS_NEXT
  }
};

export const impressPrev = () => {
  return {
    type: names.IMPRESS_PREV
  }
};

export const impressGoto = () => {
  return {
    type: names.IMPRESS_GOTO
  }
};
