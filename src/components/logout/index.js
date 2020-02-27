import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './logout.css';

const Logout = ({ userAuth, onLogout }) => (
  <>
    {userAuth && (
      <>
        <p className="name text-light">{userAuth.userName}</p>
        <Link onClick={onLogout} to="logout" className="user text-light">
          Logout
        </Link>
      </>
    )}
  </>
);

Logout.propTypes = {
  userAuth: PropTypes.shape({
    userName: PropTypes.string,
    pass: PropTypes.string,
    auth: PropTypes.bool
  }),
  onLogout: PropTypes.func
};

Logout.defaultProps = {
  userAuth: null,
  onLogout: () => {}
};

export default Logout;
