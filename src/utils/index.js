import { listPerPage } from '../constants';

import LocalStorageService from '../services';

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

export const emptyFieldValidation = (firstField, secondField) => !!(!firstField.trim() || !secondField.trim());
export const fieldLengthValidation = (userName, pass) => !!(userName.length < 3 || userName.length > 14 || pass.length < 3 || pass.length > 14);
export const checkData = (data, firstUser, secondUser) => firstUser[data].toLowerCase() !== secondUser[data].toLowerCase();
export const fieldLengthValidationEdit = (title, desc) => !!(title.length < 4 || title.length > 24 || desc.length < 4);

export const getDataFromLocalStorage = () => {
  const service = new LocalStorageService();
  const localStorageState = service.getItem();

  return localStorageState;
};

export const setDataInLocalStorage = (users, articles) => {
  const newState = {
    users,
    articles
  };

  const service = new LocalStorageService();
  service.setItem(newState);
};
