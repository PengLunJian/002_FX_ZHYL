export default {
  dateFormat: (offsetTime) => {
    const date = new Date(offsetTime);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
    month = month > 9 ? month : '0' + month;
    day = day > 9 ? day : '0' + day;
    return year + '-' + month + '-' + day;
  }
};
