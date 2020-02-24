import { listPerPage } from "../constants";

export const getReadDate = (created_ad) => {
    const newDate = new Date(created_ad * 1000);

    const hours = (`${newDate.getHours()}`).padStart(2, '0');
    const minutes = (`${newDate.getMinutes()}`).padStart(2, '0');
    const day = (`${newDate.getDate()}`).padStart(2, '0');
    const month = (`${newDate.getMonth() + 1}`).padStart(2, '0');
    const year = newDate.getFullYear();

    const readDate = created_ad ? `${hours} : ${minutes} - ${day} : ${month} : ${year}` : null;

    return readDate;
};

export const getDataForCurrentPage = (currentPage, articles) => {
    const indexOfLastItem = currentPage * listPerPage;
    const indexOfFirstItem = indexOfLastItem - listPerPage;
    const totalItemsPagination = Math.ceil(articles.length / listPerPage);
    const currentArticles = articles.slice(indexOfFirstItem, indexOfLastItem);

    return [ totalItemsPagination, currentArticles ];
};
