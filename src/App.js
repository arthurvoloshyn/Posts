import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Posts from './containers/posts';
import { UserProvider } from './context';

const App = () => (
  <Router>
    <UserProvider>
      <Posts />
    </UserProvider>
  </Router>
);

export default App;
