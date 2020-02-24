const useFunc = () => {
  const getReadDate = (date) => {
    const newDate = new Date(date),
      hours = ('' + newDate.getHours()).padStart(2, '0'),
      minutes = ('' + newDate.getMinutes()).padStart(2, '0'),
      day = ('' + newDate.getDate()).padStart(2, '0'),
      month = ('' + (newDate.getMonth()+1)).padStart(2, '0'),
      year = newDate.getFullYear(),
      readDate = date
        ? `${hours} : ${minutes} - ${day} : ${month} : ${year}` : null;

    return readDate;
  };

  return {
    getReadDate
  }
}

export default useFunc