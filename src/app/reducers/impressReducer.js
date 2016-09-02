import * as names from '../constants/actionNames';

const impressReducer = (state={}, action) => {
  switch(action.type) {
    case names.IMPRESS_INIT:
      return {
        //slideName: action.slideName,
        ...state,
        slideIndex: action.slideIndex || 0
      };
    case names.IMPRESS_NEXT:
      return {
        ...state,
        slideIndex: state.slideIndex + 1
      };
    case names.IMPRESS_PREV:
      return {
        ...state,
        slideIndex: state.slideIndex - 1
      };
    case names.IMPRESS_GOTO:
      return {
        ...state,
        slideIndex: action.slideIndex
      };
    case names.IMPRESS_RESET:
      return {
        slideName: null,
        slideIndex: 0,
        laserPointer: {
          x: 0,
          y: 0
        }
      };
    case names.IMPRESS_LASER_POINTER:
      return {
        ...state,
        laserPointer: {
          x: action.x,
          y: action.y
        }
      };
    default:
      return state;
  }
};

export default impressReducer;
