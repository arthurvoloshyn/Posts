import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getReadDate } from '../../utils';

import usePost from '../../hooks/usePost';

import DelButton from '../../components/del-button';

import './single-post.css';

const SinglePost = ({
  match: {
    params: { id }
  },
  history
}) => {
  const [article, userAuth, delPost] = usePost(id, history);

  if (!article) {
    return (
      <div className="container">
        <h2>Post not found</h2>
      </div>
    );
  }

  const { title, description, author, created_ad } = article;
  const readDate = getReadDate(created_ad);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 article article-post">
          <h3 className="title-post">{title}</h3>
          <p className="post-desc">{description}</p>
          <div className="row">
            <div className="col-6">{author}</div>
            <div className="col-6">{readDate}</div>
          </div>
        </div>
      </div>
      <DelButton author={author} userAuth={userAuth} delPost={delPost} />
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
