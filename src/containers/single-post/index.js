import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from '../../context/index';

import { getReadDate } from '../../utils';

import LocalStorageService from '../../services';

const SinglePost = ({
  match: {
    params: { id }
  },
  history
}) => {
  const [state, setState] = useContext(UserContext);
  const { articles, userAuth, users } = state;

  const article = articles ? articles.find(({ created_ad }) => created_ad === id) : null;

  if (!article) {
    return (
      <div className="container">
        <h2>Post not found</h2>
      </div>
    );
  }

  const { title, description, author, created_ad } = article;
  const readDate = getReadDate(created_ad);

  const delPost = () => {
    const newArticles = articles.filter(({ title, desc }) => title !== article.title || desc !== article.desc);

    setState(state => ({ ...state, articles: newArticles }));

    const newState = {
      users,
      articles: newArticles
    };

    const service = new LocalStorageService();
    service.setItem(newState);

    history.push('/');
  };

  const delButton =
    userAuth !== null && userAuth.userName === article.author ? (
      <button type="button" className="btn btn-danger" onClick={delPost}>
        Delete
      </button>
    ) : null;

  return (
    <div className="container">
      <div className="col-12 article">
        <h3 className="title-post">{title}</h3>
        <p className="post-desc">{description}</p>
        <div className="row">
          <div className="col-6">{author}</div>
          <div className="col-6">{readDate}</div>
        </div>
      </div>
      {delButton}
    </div>
  );
};

SinglePost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

SinglePost.defaultProps = {
  match: {
    params: {
      id: ''
    }
  },
  history: {
    push: () => {}
  }
};

export default withRouter(SinglePost);
