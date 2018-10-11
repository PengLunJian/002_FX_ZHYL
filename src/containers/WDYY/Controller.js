import apiMain from '../../apiMain/apiMain';

const controller = {
  ajaxWDYY: function () {
    this.$http(apiMain.wdyy)
      .then((res) => {
        this.items = res.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default controller;
