import { useState } from 'react';

import { next, prev } from '../../constants';

import { getDataForCurrentPage } from '../../utils';

const usePaginate = articles => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItemsPagination, currentArticles] = getDataForCurrentPage(currentPage, articles);

  const paginate = operator => {
    if (operator === next) {
      setCurrentPage(currentPage + 1);
    } else if (operator === prev) {
      setCurrentPage(currentPage - 1);
    }
  };

  return [currentPage, paginate, totalItemsPagination, currentArticles];
};

export default usePaginate;
