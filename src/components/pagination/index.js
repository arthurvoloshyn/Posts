import React from "react";
import { prev, next } from '../../constants';

const Pagination = ({totalItems, currentPage, paginate}) => {

  if(totalItems <= 1) {
    return null;
  }

  const nextPage = () => paginate(next);
  const prevPage = () => paginate(prev);

  return (
    <div className="row ">
      <div className="col-12 col_space-between">
        <button onClick={prevPage} className="arrow-left">{'<'}</button>
        <span>{currentPage} of {totalItems}</span>
        <button onClick={nextPage} className="arrow-right">{'>'}</button>
      </div>
    </div>
  )
};

export default Pagination;
