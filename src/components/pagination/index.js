import React from 'react';
import PropTypes from 'prop-types';

import { prev, next, firstPage } from '../../constants';

import { paginationClasses } from '../../utils';

const Pagination = ({ totalItems, currentPage, paginate }) => {
  if (totalItems <= 1) {
    return null;
  }

  const nextPage = () => paginate(next);
  const prevPage = () => paginate(prev);

  const isFirstPage = currentPage === firstPage;
  const isLastPage = currentPage === totalItems;

  return (
    <div className="col-12">
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <li className={paginationClasses(isFirstPage)}>
            <button onClick={prevPage} className="arrow-left page-link">
              {'<'}
            </button>
          </li>
          <li className="page-item">
            <span className="page-link">
              {currentPage} of {totalItems}
            </span>
          </li>
          <li className={paginationClasses(isLastPage)}>
            <button onClick={nextPage} className="arrow-right page-link">
              {'>'}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func
};

Pagination.defaultProps = {
  totalItems: 1,
  currentPage: 1,
  paginate: () => {}
};

export default Pagination;
