import * as names from '../../constants/actionNames';

const internetReducer = (state={}, action) => {
  switch (action.type) {
    case names.INTERNET_UP:

    case names.INTERNET_DOWN:

    case names.INTERNET_CONFIRM_UP:

    case names.INTERNET_CONFIRM_DOWN:

    case names.INTERNET_CHECKING:

      return {
        status: action.type
      };

    default:
      return state;
  }
};

export default internetReducer;
