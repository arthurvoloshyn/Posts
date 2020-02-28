import React from 'react';
import PropTypes from 'prop-types';

const DelButton = ({ delPost }) => (
  <button type="button" className="btn btn-danger" onClick={delPost}>
    Delete
  </button>
);

DelButton.propTypes = {
  delPost: PropTypes.func
};

DelButton.defaultProps = {
  delPost: () => {}
};

export default DelButton;
