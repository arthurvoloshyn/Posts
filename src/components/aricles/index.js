import React from "react";
import './article.css'
import {Link} from "react-router-dom";
import useFunc from "../../containers/context/use-func";

// const getReadDate = (date) => {
//   const newDate = new Date(date),
//         hours = ('' + newDate.getHours()).padStart(2, '0'),
//         minutes = ('' + newDate.getMinutes()).padStart(2, '0'),
//         day = newDate.getDate(),
//         month = ('' + (newDate.getMonth()+1)).padStart(2, '0'),
//         year = newDate.getFullYear(),
//         readDate = date
//           ? `${hours} : ${minutes} - ${day} : ${month} : ${year}` : null;
//
//   return readDate;
// }


const Articles = ({articles}) => {
  const {getReadDate} = useFunc();
  return (
    <>
      {articles ?
        articles.map(article => {
          const {title, created_ad, description, author} = article;

          let date = new Date(created_ad * 1000);
          const readDate = getReadDate(date)

          return (
            <div key={created_ad} className="col-12 article">
              <Link className="title-post" to={created_ad}>{title}</Link>
              <p className="post-desc">{description}</p>
              <div className="row">
                <div className="col-6">{author}</div>
                <div className="col-6">{readDate}</div>
              </div>
            </div>
          )
        }) : null
      }
    </>
  )
}

export default Articles;