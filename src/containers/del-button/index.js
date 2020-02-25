import React from 'react';
import PropTypes from 'prop-types';

import LocalStorageService from '../../services';

const DelButton = ({ articles, title, desc, setState, users, history, userAuth, author }) => {
  const delPost = () => {
    const newArticles = articles.filter(el => el.title !== title || el.desc !== desc);

    setState(state => ({ ...state, articles: newArticles }));

    const newState = {
      users,
      articles: newArticles
    };

    const service = new LocalStorageService();
    service.setItem(newState);

    history.push('/');
  };

  return (
    <>
      {userAuth !== null && userAuth.userName === author ? (
        <button type="button" className="btn btn-danger" onClick={delPost}>
          Delete
        </button>
      ) : null}
    </>
  );
};

DelButton.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      author: PropTypes.string,
      created_ad: PropTypes.string
    })
  ),
  title: PropTypes.string,
  desc: PropTypes.string,
  setState: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      userName: PropTypes.string,
      pass: PropTypes.string,
      auth: PropTypes.bool
    })
  ),
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  userAuth: PropTypes.shape({
    userName: PropTypes.string,
    pass: PropTypes.string,
    auth: PropTypes.bool
  }),
  author: PropTypes.string
};

DelButton.defaultProps = {
  articles: [],
  title: '',
  desc: '',
  setState: () => {},
  users: [],
  history: {
    push: () => {}
  },
  userAuth: null,
  author: ''
};

export default DelButton;
