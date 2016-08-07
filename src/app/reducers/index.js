import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projectReducer from './projectReducer';
import uiReducer from './uiReducer';
import networkReducer from './networkReducer/networkReducer';
import impressReducer from './impressReducer';

const rootReducer = combineReducers({
  projects:     projectReducer,
  uiState:      uiReducer,
  networkState: networkReducer,
  impressState: impressReducer,
  routing:      routerReducer
});

export default rootReducer;
