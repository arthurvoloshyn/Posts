import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FormAuth from '../../containers/form-auth';

const VisibleForm = ({ userAuth }) => (
  <>
    {!userAuth ? (
      <FormAuth />
    ) : (
      <Link to="/edit" className="create-ad btn btn-primary">
        Create Ad
      </Link>
    )}
  </>
);

VisibleForm.propTypes = {
  userAuth: PropTypes.shape({
    userName: PropTypes.string,
    pass: PropTypes.string,
    auth: PropTypes.bool
  })
};

VisibleForm.defaultProps = {
  userAuth: null
};

export default VisibleForm;
