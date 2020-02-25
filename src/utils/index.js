import { listPerPage } from '../constants';

const addPadStart = string => string.padStart(2, '0');

export const getReadDate = created_ad => {
  const newDate = new Date(created_ad * 1000);

  const hours = addPadStart(`${newDate.getHours()}`);
  const minutes = addPadStart(`${newDate.getMinutes()}`);
  const day = addPadStart(`${newDate.getDate()}`);
  const month = addPadStart(`${newDate.getMonth() + 1}`);
  const year = newDate.getFullYear();

  const readDate = created_ad ? `${hours} : ${minutes} - ${day} : ${month} : ${year}` : null;

  return readDate;
};

export const getDataForCurrentPage = (currentPage, articles) => {
  const indexOfLastItem = currentPage * listPerPage;
  const indexOfFirstItem = indexOfLastItem - listPerPage;
  const totalItemsPagination = Math.ceil(articles.length / listPerPage);
  const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

  return [totalItemsPagination, currentArticles];
};

export const stamp = (Date.now() / 1000).toFixed(0);
