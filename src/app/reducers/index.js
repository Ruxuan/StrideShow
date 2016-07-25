import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import presentations from './presentations';


const rootReducer = combineReducers({
  presentations,
  routing: routerReducer
});

export default rootReducer;
