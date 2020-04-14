import React, { useContext } from 'react';

import { UserContext } from '../../context';

import usePagination from '../../hooks/usePagination';

import Articles from '../../components/aricles';
import Pagination from '../../components/pagination';
import VisibleForm from '../../components/visible-form';

import './main-page.css';

const MainPage = () => {
  const [state] = useContext(UserContext);
  const { articles, userAuth } = state;

  const [currentPage, paginate, totalItemsPagination, currentArticles] = usePagination(articles);

  return (
    <main className="container">
      <section className="row wrapper">
        <VisibleForm userAuth={userAuth} />
        <Articles articles={currentArticles} />
        <Pagination currentPage={currentPage} totalItems={totalItemsPagination} paginate={paginate} />
      </section>
    </main>
  );
};

export default MainPage;
