import React, {useContext, useState} from "react";
import FormAuth from "../form-auth";
import Articles from "../../components/aricles";
import {UserContext} from "../context";

import './main-page.css'
import Pagination from "../../components/pagination";
import {Link} from "react-router-dom";


const MainPage = () => {
  const [state] = useContext(UserContext);

  const {articles, userAuth} = state;


  const [listPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  // get current page
  const indexOfLastItem = currentPage * listPerPage;
  const indexOfFirstItem = indexOfLastItem - listPerPage;
  const totalItemsPagination = Math.ceil(articles.length / listPerPage)
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);
  // change page
  const paginate = (operator) => {
    if (operator === "+") {
      if (currentPage !== totalItemsPagination) {
        setCurrentPage(currentPage + 1)

      }
    } else if (operator === "-") {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1)
      }
    }
  }


  const visibleForm = !userAuth ?
    <FormAuth/> :
    <Link to="/edit" className="create-ad btn btn-primary">Create Ad</Link>;

  return (
    <div className="container">
      <div className="row">
        {visibleForm}
        <Articles articles={currentArticles}/>
        <Pagination
          currentPage={currentPage}
          totalItems={totalItemsPagination}
          paginate={paginate}
        />
      </div>
    </div>
  )
}

export default MainPage;