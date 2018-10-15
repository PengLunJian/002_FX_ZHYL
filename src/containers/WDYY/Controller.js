import apis from '../../apiMain';

const controller = {
  ajaxWDYY: function (pageCode) {
    const params = {pageCode: pageCode};
    this.$axios(apis.wdyy, params)
      .then((response) => {
        let {data} = response;
        if (!data.length) {
          this.isShow = true;
          return;
        }
        data = this.dataList.length > 10 ? [] : data;
        this.dataList = this.dataList.concat(data);
        const hasNext = data.length > 0;
        this.pageCode = hasNext ? (this.pageCode + 1) : this.pageCode;
        this.mescroll.endSuccess(10, hasNext);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  infinite: function () {
    clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.ajaxWDYY(this.pageCode);
    }, 1000);
    console.log('infinite');
  },
  refresh: function () {
    this.dataList = [];
    this.pageCode = 1;
    this.ajaxWDYY(this.pageCode);
  },
  mescrollInit: function (mescroll) {
    this.mescroll = mescroll;
  }
};

export default controller;
