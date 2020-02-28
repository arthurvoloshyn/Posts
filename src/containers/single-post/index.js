import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    <main className="container">
      <section className="row">
        <article className="col-12 article article-post">
          <h3 className="title-post">{title}</h3>
          <p className="post-desc">{description}</p>
          <div className="row">
            <div className="col-6">{author}</div>
            <div className="col-6">{readDate}</div>
          </div>
        </article>
      </section>

      <div className="row">
        {userAuth !== null && userAuth.userName === author ? (
          <div className="col-6">
            <DelButton author={author} userAuth={userAuth} delPost={delPost} />
          </div>
        ) : null}

        <div className="col-6">
          <Link to="/" className="btn btn-form">
            Going back
          </Link>
        </div>
      </div>
    </main>
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
