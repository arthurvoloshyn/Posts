import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { UserContext } from '../../context';

import { setDataInLocalStorage } from '../../utils';

import Logout from '../../components/logout';

import './header.css';

const Header = () => {
  const [state, setState] = useContext(UserContext);
  const { users, userAuth, articles } = state;

  const onLogout = e => {
    e.preventDefault();

    users.map(item => {
      if (item.auth) {
        item.auth = false;
      }

      return item;
    });

    setState(state => ({ ...state, users, userAuth: null }));

    setDataInLocalStorage(users, articles);

    return <Redirect to="/" />;
  };

  return (
    <header>
      <div className="container">
        <div className="header-row">
          <Link to="/">Logo</Link>
          <Logout userAuth={userAuth} onLogout={onLogout} />
        </div>
      </div>
    </header>
  );
};

export default Header;
