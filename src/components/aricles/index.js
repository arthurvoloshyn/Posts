import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getReadDate } from '../../utils';

import './article.css';

const Articles = ({ articles }) => (
  <>
    {articles.map(({ title, created_ad, description, author }) => (
      <div key={created_ad} className="col-12 article">
        <Link className="title-post" to={created_ad}>
          {title}
        </Link>
        <p className="post-desc">{description}</p>
        <div className="row">
          <div className="col-6">{author}</div>
          <div className="col-6">{getReadDate(created_ad)}</div>
        </div>
      </div>
    ))}
  </>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      created_ad: PropTypes.string,
      description: PropTypes.string,
      author: PropTypes.string
    })
  )
};

Articles.defaultProps = {
  articles: []
};

export default Articles;
