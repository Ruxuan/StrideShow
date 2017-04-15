import React from 'react';
import { render } from 'react-dom';

import App from './containers/App';
import Dashboard from './containers/dashboard/Dashboard';
import Slideshow from './containers/slideshow/Slideshow';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store/store';

const router = (
  <Provider store={store}>
   <Router history={history}>
     <Route path="/" component={ App }>
       <IndexRoute component={ Dashboard } />
       <Route path="/slideshow/:index" component={ Slideshow } />
     </Route>
   </Router>
  </Provider>
);

//router,
render(
  router,
  document.getElementById('demo')
);
