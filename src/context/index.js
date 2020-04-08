import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { contextDefaultValue } from '../constants';

import useData from '../hooks/useData';

const UserContext = createContext(contextDefaultValue);

const UserProvider = ({ children }) => {
  const value = useData();

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
  children: PropTypes.element
};

UserProvider.defaultProps = {
  children: null
};

export { UserContext, UserProvider };
