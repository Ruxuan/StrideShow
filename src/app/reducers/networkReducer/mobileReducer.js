import * as actions from '../../constants/actionNames';

const mobileReducer = (state={}, action) => {
  switch(action.type) {
    case actions.MOBILE_CONNECT:
    case actions.MOBILE_DISCONNECT:
      return {
        ...state,
        status: action.type
      };
    case actions.MOBILE_ACTIVE_PROJECT:
      return {
        ...state,
        // TODO: mobileActiveProject: action.activeProjectId
      };
    // TODO: rm mobile device info and set it when mobile connects?
    case actions.MOBILE_DEVICE_INFO:
      return {
        ...state,
        mobileDeviceInfo: {
          OS: "Android Nougat",
          model: "Nexus 5",
          owner: "Ruxuan Li"
        }
      };
    default:
      return state;
  }
};

export default mobileReducer;
