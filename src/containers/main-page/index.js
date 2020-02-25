import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context';

import usePaginate from '../../hooks/usePaginate';

import Articles from '../../components/aricles';
import Pagination from '../../components/pagination';

import FormAuth from '../form-auth';

import './main-page.css';

const MainPage = () => {
  const [state] = useContext(UserContext);
  const { articles, userAuth } = state;

  const [currentPage, paginate, totalItemsPagination, currentArticles] = usePaginate(articles);

  const visibleForm = !userAuth ? (
    <FormAuth />
  ) : (
    <Link to="/edit" className="create-ad btn btn-primary">
      Create Ad
    </Link>
  );

  return (
    <div className="container">
      <div className="row">
        {visibleForm}
        <Articles articles={currentArticles} />
        <Pagination currentPage={currentPage} totalItems={totalItemsPagination} paginate={paginate} />
      </div>
    </div>
  );
};

export default MainPage;
