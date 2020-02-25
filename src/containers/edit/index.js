import React, { useContext, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from '../../context';

import LocalStorageService from '../../services';

import { stamp } from '../../utils';

const Edit = ({ history }) => {
  const [state, setState] = useContext(UserContext);
  const { userAuth, articles, users } = state;

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [check, setCheck] = useState(false);
  const [checkEmpty, setCheckEmpty] = useState(false);

  const onChangeTitle = ({ target: { value } }) => {
    setTitle(value);
  };

  const onChangeDesc = ({ target: { value } }) => {
    setDesc(value);
  };

  const onSubmitArticle = e => {
    e.preventDefault();

    if (title.trim() === '' || desc.trim() === '') {
      return setCheckEmpty(true);
    }

    setCheckEmpty(false);

    if (title.length < 4 || title.length > 24 || desc.length < 4) {
      return setCheck(true);
    }

    setCheck(false);

    // article
    const article = {
      title,
      description: desc,
      author: userAuth.userName,
      created_ad: stamp
    };

    articles.push({ ...article });

    setState(state => ({ ...state, articles }));

    const newState = {
      users,
      articles
    };

    const service = new LocalStorageService();
    service.setItem(newState);

    history.push(`/${stamp}`);
    setTitle('');
    setDesc('');
  };

  const checkFieldEmpty = checkEmpty ? (
    <div className="alert alert-danger" role="alert">
      поля не должны быть пустыми
    </div>
  ) : null;

  const checkForm = check ? (
    <div className="alert alert-danger" role="alert">
      поля формы должны иметь более 4 символов и title не должен иметь больше 24 символов
    </div>
  ) : null;

  // check auth
  if (!userAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      <form className="create-article" onSubmit={onSubmitArticle}>
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" aria-describedby="title" placeholder="Title" value={title} onChange={onChangeTitle} />
        <label htmlFor="Textarea1">Description</label>
        <textarea className="form-control" id="Textarea1" rows="3" value={desc} onChange={onChangeDesc}></textarea>
        <input type="submit" className="btn btn-primary" value="Create" />
      </form>
      {checkForm}
      {checkFieldEmpty}
    </div>
  );
};

Edit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

Edit.defaultProps = {
  history: {
    push: () => {}
  }
};

export default withRouter(Edit);
