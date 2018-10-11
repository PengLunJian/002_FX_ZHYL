import apiMain from '../../apiMain/apiMain';

const controller = {
  ajaxWDYY: function () {
    console.log(apiMain.wdyy);
    this.$http(apiMain.wdyy)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // this.$http.get('/wdyy')
    //   .then((response) => {
    //     console.log(this);
    //     this.items = response.data.data;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
};

export default controller;
