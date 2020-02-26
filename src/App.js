import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserProvider } from './context';

import Posts from './components/posts';

const App = () => (
  <Router>
    <UserProvider>
      <Posts />
    </UserProvider>
  </Router>
);

export default App;
