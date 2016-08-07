import * as names from '../constants/actionNames';
import { socket } from './networkActions/socketActions';

export function attachSocket() {
  return (dispatch) => {

    socket.on('next', function (data) {
      console.log('impress next');
      dispatch(impressNext());
    });

    socket.on('prev', function (data) {
      console.log('impress prev');
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
    socket.off('next');
    socket.off('prev');
    socket.off('goto');
  }
}

export const impressInit = (/*slideName*/) => {
  return {
    type: names.IMPRESS_INIT
    //slideName: slideName
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

export const impressReset = () => {
  return {
    type: names.IMPRESS_RESET
  }
};
