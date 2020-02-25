import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from '../../context/index';

import { getReadDate } from '../../utils';

import DelButton from '../del-button';

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

  const { title, description, author, created_ad, desc } = article;
  const readDate = getReadDate(created_ad);

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
      <DelButton articles={articles} title={title} desc={desc} history={history} author={author} setState={setState} userAuth={userAuth} users={users} />
    </div>
  );
};

SinglePost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }),
  history: PropTypes.object
};

SinglePost.defaultProps = {
  match: {
    params: {
      id: ''
    }
  },
  history: {}
};

export default withRouter(SinglePost);
