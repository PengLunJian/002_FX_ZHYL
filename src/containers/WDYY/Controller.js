import apis from '../../apiMain';

const controller = {
  ajaxWDYY: function () {
    this.$axios(apis.wdyy, {pageIndex: 2})
      .then((response) => {
        this.items = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default controller;
