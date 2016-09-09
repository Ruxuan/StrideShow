import * as actions from '../../constants/actionNames';

const mobileReducer = (state={}, action) => {
  switch(action.type) {
    case actions.MOBILE_CONNECT:
      return {
        ...state,
        status: action.type,
        deviceInfo: action.deviceInfo
      };
    case actions.MOBILE_DISCONNECT:
      return {
        ...state,
        status: action.type,
        deviceInfo: {
          OS: null,
          SDK: null,
          model: null
        }
      };
    case actions.MOBILE_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.activeProject
      };
    default:
      return state;
  }
};

export default mobileReducer;
