import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './containers/app'
import {UserProvider} from "./containers/context";



ReactDom.render(
  <Router>
    <UserProvider>
      <App/>
    </UserProvider>
  </Router>
  , document.getElementById('root'));