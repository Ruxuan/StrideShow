import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Reducers
import rootReducer from '../reducers/index';

// Create Store
const defaultState = {
  projects : window.strideshow.__INITIAL_STATE__,
  uiState:   window.strideshow.__UI_STATE__
};

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
