import * as names from '../../constants/actionNames';
import 'offline-js';

export function internetInit() {
  return (dispatch) => {
    Offline.options = {
      checkOnLoad: true,
      interceptRequests: false,
      requests: false,
      game: false
    };

    Offline.on("confirmed-up", function () {
      dispatch(internetUp());
    }, document);

    Offline.on("confirmed-down", function () {
      dispatch(internetDown());
    }, document);

    Offline.on("checking", function () {
      dispatch(internetChecking());
    }, document);
  }
}

export const internetUp = () => {
  return {
    type: names.INTERNET_UP
  }
};

export const internetDown = () => {
  return {
    type: names.INTERNET_DOWN
  }
};

export const internetChecking = () => {
  return {
    type: names.INTERNET_CHECKING
  }
};
