import React from "react";

const Pagination = ({totalItems, currentPage, paginate}) => {

  if(totalItems <= 1) {
    return null
  }

  const paginateArrow = (operator) => {
    paginate(operator)
  };

  return (
    <div className="row ">
      <div className="col-12 col_space-between">
        <button onClick={()=>{paginateArrow('-')}} className="arrow-left">{'<'}</button>
        <span>{currentPage} of {totalItems}</span>
        <button onClick={()=>{paginateArrow('+')}} className="arrow-right">{'>'}</button>
      </div>
    </div>
  )
}

export default Pagination;