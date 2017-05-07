import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from 'components/App';
import Cars from 'views/Cars';
import About from 'views/About';


ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }/>
   	<Route path ='/' component={ Cars } />
    <Route path='/about' component={ About } />
  </Router>,
  document.getElementById('app') // eslint-disable-line
);
