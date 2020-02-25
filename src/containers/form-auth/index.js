import React, { useContext, useState } from 'react';

import { UserContext } from '../../context';

import LocalStorageService from '../../services';

import './form-auth.css';

const FormAuth = () => {
  const [state, setState] = useContext(UserContext);
  const { users, articles } = state;

  const [userName, setUserName] = useState('');
  const [pass, setPass] = useState('');
  const [check, setCheck] = useState(false);
  const [checkEmpty, setCheckEmpty] = useState(false);
  const [checkName, setCheckName] = useState(false);
  const [checkPass, setCheckPass] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (userName.trim() === '' || pass.trim() === '') {
      return setCheckEmpty(true);
    }

    setCheckEmpty(false);

    if (userName.length < 3 || userName.length > 14 || pass.length < 3 || pass.length > 14) {
      return setCheck(true);
    }

    setCheck(false);

    const item = {
      userName,
      pass
    };

    // auth
    const idx = users.findIndex(el => el.userName.toLowerCase() === item.userName.toLowerCase());

    if (idx >= 0) {
      if (users[idx].userName.toLowerCase() !== item.userName.toLowerCase()) {
        return setCheckName(true);
      }

      setCheckName(false);
      if (users[idx].pass.toLowerCase() !== item.pass.toLowerCase()) {
        return setCheckPass(true);
      }

      setCheckPass(false);

      const newUsers = users.map(({ userName }) => {
        if (userName === item.userName) {
          item.auth = true;
        }

        return item;
      });

      setState(state => ({ ...state, users: newUsers, userAuth: users[idx] }));
    } else {
      users.push({ ...item, auth: true });

      setState(state => ({ ...state, users, userAuth: users[users.length - 1] }));
    }

    const newState = {
      users,
      articles
    };

    const service = new LocalStorageService();
    service.setItem(newState);

    setUserName('');
    setPass('');
  };

  const onSetName = ({ target: { value } }) => {
    setUserName(value);
  };

  const onSetPass = ({ target: { value } }) => {
    setPass(value);
  };

  const warning = check ? (
    <div className="alert alert-danger" role="alert">
      поля формы должны иметь более 2 символов и не больше 14
    </div>
  ) : null;

  const warningName = checkName ? (
    <div className="alert alert-danger" role="alert">
      неправильно ввели имя
    </div>
  ) : null;

  const warningEmpty = checkEmpty ? (
    <div className="alert alert-danger" role="alert">
      поля не должны быть пустыми или иметь пробелы
    </div>
  ) : null;

  const warningPass = checkPass ? (
    <div className="alert alert-danger" role="alert">
      неправильно ввели пароль
    </div>
  ) : null;

  return (
    <form className="form-signin" onSubmit={onSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
      <input type="text" id="userName" className="form-control" placeholder="Name" value={userName} onChange={onSetName} />
      <input type="password" id="inputPassword" className="form-control" placeholder="Password" value={pass} onChange={onSetPass} />
      {warning}
      {warningEmpty}
      {warningName}
      {warningPass}
      <input className="btn btn-lg btn-primary btn-block" type="submit" value="Sign in" />
    </form>
  );
};

export default FormAuth;
