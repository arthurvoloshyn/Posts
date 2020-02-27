import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { UserContext } from '../../context';

import { setDataInLocalStorage } from '../../utils';

const useLogout = () => {
  const [state, setState] = useContext(UserContext);
  const { users, userAuth, articles } = state;

  const onLogout = e => {
    e.preventDefault();

    const newUsers = users.map(item => (item.auth ? { ...item, auth: false } : { ...item }));

    setState(state => ({ ...state, users: newUsers, userAuth: null }));

    setDataInLocalStorage(newUsers, articles);

    return <Redirect to="/" />;
  };

  return [userAuth, onLogout];
};

export default useLogout;
