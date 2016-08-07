import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { socketInit } from '../actions/networkActions/socketActions';
import { internetInit } from '../actions/networkActions/internetActions';
import { mobileInit } from '../actions/networkActions/mobileActions';
import { logger } from './middleware';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from '../reducers/index';

// Get state passed from server
const defaultState = window.strideshow.__INITIAL_STATE__;

// Dev tool enhancers
const enhancers = compose(
  applyMiddleware(/* logger, */ thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create store
const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

// Setup network actions
store.dispatch(socketInit());
store.dispatch(internetInit());
store.dispatch(mobileInit());

// Browser history
export const history = syncHistoryWithStore(browserHistory, store);

// Redux hot loading
if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
