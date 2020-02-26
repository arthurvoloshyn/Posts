import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({ checkLength, checkName, checkEmpty, checkPass, checkLengthEdit }) => (
  <>
    {checkLength || checkName || checkEmpty || checkPass || checkLengthEdit ? (
      <div className="alert alert-danger" role="alert">
        {checkLength && <p>Form fields must have more than 2 characters and no more than 14.</p>}
        {checkName && <p>Wrong name entered.</p>}
        {checkEmpty && <p>Fields must not be empty or have spaces.</p>}
        {checkPass && <p>Password entered incorrectly.</p>}
        {checkLengthEdit && <p>Form fields must have more than 4 characters and title should not have more than 24 characters.</p>}
      </div>
    ) : null}
  </>
);

Warning.propTypes = {
  checkLength: PropTypes.bool,
  checkName: PropTypes.bool,
  checkEmpty: PropTypes.bool,
  checkPass: PropTypes.bool,
  checkLengthEdit: PropTypes.bool
};

Warning.defaultProps = {
  checkLength: false,
  checkName: false,
  checkEmpty: false,
  checkPass: false,
  checkLengthEdit: false
};

export default Warning;
