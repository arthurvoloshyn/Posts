import React from 'react';

import { fieldUserName, fieldPass } from '../../constants';

import useAuth from '../../hooks/useAuth';

import Warning from '../../components/warning';

import './form-auth.css';

const FormAuth = () => {
  const [onSubmit, onSetData, check, data] = useAuth();
  const { userName, pass } = data;
  const { checkLength, checkName, checkEmpty, checkPass } = check;

  return (
    <form className="form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
      <input type="text" name={fieldUserName} id="userName" className="form-control" placeholder="Name" value={userName} onChange={onSetData} />
      <input type="password" name={fieldPass} id="inputPassword" className="form-control" placeholder="Password" value={pass} onChange={onSetData} />
      <Warning checkLength={checkLength} checkName={checkName} checkEmpty={checkEmpty} checkPass={checkPass} />
      <input className="btn btn-lg btn-form btn-block" type="submit" value="Sign in" />
    </form>
  );
};

export default FormAuth;
