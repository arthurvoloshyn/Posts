import { useContext, useState } from 'react';

import { UserContext } from '../../context';

import { emptyFieldValidation, fieldLengthValidationEdit, setDataInLocalStorage } from '../../utils';

const useEdit = history => {
  const [state, setState] = useContext(UserContext);
  const { userAuth, articles, users } = state;

  const [data, setData] = useState({ title: '', desc: '' });
  const { title, desc } = data;
  const [check, setCheck] = useState({ checkLengthEdit: false, checkEmpty: false });

  const onChangeData = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };

  const onSubmitArticle = e => {
    e.preventDefault();

    if (emptyFieldValidation(title, desc)) {
      return setCheck({ ...check, checkEmpty: true });
    }

    setCheck({ ...check, checkEmpty: false });

    if (fieldLengthValidationEdit(title, desc)) {
      return setCheck({ ...check, checkLengthEdit: true });
    }

    setCheck({ ...check, checkLengthEdit: false });

    const stamp = (Date.now() / 1000).toFixed();

    // article
    const article = {
      title,
      description: desc,
      author: userAuth.userName,
      created_ad: stamp
    };

    articles.push({ ...article });

    setState(state => ({ ...state, articles }));

    setDataInLocalStorage(users, articles);

    history.push(`/${stamp}`);
    setData({ title: '', desc: '' });
  };

  return [onChangeData, onSubmitArticle, check, data, userAuth];
};

export default useEdit;
