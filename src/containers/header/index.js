import React from 'react';
import { Link } from 'react-router-dom';

import useLogout from '../../hooks/useLogout';

import Logout from '../../components/logout';

import './header.css';

const Header = () => {
  const [userAuth, onLogout] = useLogout();

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
          <Logout userAuth={userAuth} onLogout={onLogout} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
