import React from 'react';
import PropTypes from 'prop-types';

const DelButton = ({ userAuth, author, delPost }) => (
  <>
    {userAuth !== null && userAuth.userName === author ? (
      <button type="button" className="btn btn-danger" onClick={delPost}>
        Delete
      </button>
    ) : null}
  </>
);

DelButton.propTypes = {
  userAuth: PropTypes.shape({
    userName: PropTypes.string,
    pass: PropTypes.string,
    auth: PropTypes.bool
  }),
  author: PropTypes.string,
  delPost: PropTypes.func
};

DelButton.defaultProps = {
  userAuth: null,
  author: '',
  delPost: () => {}
};

export default DelButton;
