import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { contextDefaultValue } from '../constants';

import { getDataFromLocalStorage } from '../utils';

const UserContext = React.createContext(contextDefaultValue);

const UserProvider = ({ children }) => {
  const localStorageState = getDataFromLocalStorage();

  const [state, setState] = useState({
    userAuth: null,
    articles: localStorageState ? localStorageState.articles : [],
    users: localStorageState ? localStorageState.users : []
  });

  useEffect(() => {
    const idx = state.users.findIndex(({ auth }) => auth);

    if (idx >= 0) {
      setState(state => ({ ...state, userAuth: state.users[idx] }));
    }
  }, [state.users]);

  const value = [state, setState];

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.element
};

UserProvider.defaultProps = {
  children: null
};

export { UserContext, UserProvider };
