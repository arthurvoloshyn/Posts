import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Logout = ({ userAuth, onLogout }) => (
  <>
    {userAuth && (
      <>
        <p>{userAuth.userName}</p>
        <Link onClick={onLogout} to="logout" className="user">
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
