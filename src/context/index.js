import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LocalStorageService from '../services';

const UserContext = React.createContext([{}, () => {}]);

const UserProvider = ({ children }) => {
  const service = new LocalStorageService();
  const localStorageState = service.getItem();
  const [state, setState] = useState({
    userAuth: null,
    articles: localStorageState ? localStorageState.articles : [],
    users: localStorageState ? localStorageState.users : []
  });

  useEffect(() => {
    const idx = state.users.findIndex(el => el.auth);
    if (idx >= 0) {
      setState(state => ({ ...state, userAuth: state.users[idx] }));
    }
  }, [state.users]);

  return <UserContext.Provider value={[state, setState]}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.element
};

UserProvider.defaultProps = {
  children: null
};

export { UserContext, UserProvider };
