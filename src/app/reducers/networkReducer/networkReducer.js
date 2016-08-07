import socketReducer from './socketReducer';
import mobileReducer from './mobileReducer';
import internetReducer from './internetReducer';

const networkReducer = (state={}, action) => {
  return {
    socket:   socketReducer(state.socket, action),
    mobile:   mobileReducer(state.mobile, action),
    internet: internetReducer(state.internet, action)
  }
};

export default networkReducer;
