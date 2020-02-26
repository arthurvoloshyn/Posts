import { useContext, useState } from 'react';

import { UserContext } from '../../context';

import { emptyFieldValidation, fieldLengthValidation, checkData, setDataInLocalStorage } from '../../utils';

const useAuth = () => {
  const [state, setState] = useContext(UserContext);
  const { users, articles } = state;

  const [check, setCheck] = useState({ checkLength: false, checkEmpty: false, checkName: false, checkPass: false });
  const [data, setData] = useState({ userName: '', pass: '' });
  const { userName, pass } = data;

  const onSubmit = e => {
    e.preventDefault();

    if (emptyFieldValidation(userName, pass)) {
      return setCheck({ ...check, checkEmpty: true });
    }

    setCheck({ ...check, checkEmpty: false });

    if (fieldLengthValidation(userName, pass)) {
      return setCheck({ ...check, checkLength: true });
    }

    setCheck({ ...check, checkLength: false });

    const item = {
      userName,
      pass
    };

    // auth
    const idx = users.findIndex(el => el.userName.toLowerCase() === item.userName.toLowerCase());

    if (idx >= 0) {
      if (checkData('userName', users[idx], item)) {
        return setCheck({ ...check, checkName: true });
      }

      setCheck({ ...check, checkName: false });

      if (checkData('pass', users[idx], item)) {
        return setCheck({ ...check, checkPass: true });
      }

      setCheck({ ...check, checkPass: false });

      const newUsers = users.map(el => (el.userName === item.userName ? { ...el, auth: true } : el));

      setState(state => ({ ...state, users: newUsers, userAuth: users[idx] }));

      setDataInLocalStorage(newUsers, articles);
    } else {
      users.push({ ...item, auth: true });

      setState(state => ({ ...state, users, userAuth: users[users.length - 1] }));

      setDataInLocalStorage(users, articles);
    }

    setData({ userName: '', pass: '' });
  };

  const onSetData = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  return [onSubmit, onSetData, check, data];
};

export default useAuth;
