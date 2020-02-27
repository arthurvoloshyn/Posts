import React from 'react';
import { Link } from 'react-router-dom';

import useLogout from '../../hooks/useLogout';

import Logout from '../../components/logout';

import './header.css';

const Header = () => {
  const [userAuth, onLogout] = useLogout();

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
