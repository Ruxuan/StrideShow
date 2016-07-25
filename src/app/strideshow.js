import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import Dashboard from './containers/dashboard/Dashboard';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store/store';

const router = (
  <Provider store={store}>
   <Router history={history}>
     <Route path="/demo" component={ App }>
       <IndexRoute component={ Dashboard }></IndexRoute>
     </Route>
   </Router>
  </Provider>
)

//router,
render(
  router,
  document.getElementById('dashboard')
)
