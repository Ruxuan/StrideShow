import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projectReducer from './projectReducer';
import uiReducer from './uiReducer';


const rootReducer = combineReducers({
  projects: projectReducer,
  uiState: uiReducer,
  routing: routerReducer
});

export default rootReducer;
