import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from './context';

import Posts from './containers/posts';

const App = () => (
  <Router>
    <UserProvider>
      <Posts />
    </UserProvider>
  </Router>
);

export default App;
