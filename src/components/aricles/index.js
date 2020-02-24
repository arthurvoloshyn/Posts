import React from "react";
import {Link} from "react-router-dom";

import { getReadDate } from '../../utils';

import './article.css'

const Articles = ({articles}) => (
    <>
        {articles ?
            articles.map(({ title, created_ad, description, author }) => (
                <div key={created_ad} className="col-12 article">
                  <Link className="title-post" to={created_ad}>{title}</Link>
                  <p className="post-desc">{description}</p>
                  <div className="row">
                    <div className="col-6">{author}</div>
                    <div className="col-6">{getReadDate(created_ad)}</div>
                  </div>
                </div>
          )) : null
      }
    </>
)

export default Articles;