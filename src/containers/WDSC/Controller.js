import apis from '../../apis';

const controller = {
  ajaxTemp: function () {
    const hasNext = !(this.dataList.length > 30);
    if (hasNext) {
      this.dataList = this.dataList.concat(this.itemss);
    }
    this.mescroll.endSuccess(10, hasNext);
  },
  ajaxWDYY: function (pageCode) {
    const params = {pageCode: pageCode};
    this.$axios(apis.wdyy, params)
      .then((response) => {
        let {data} = response;
        if (!data.length && pageCode === 1) {
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
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.ajaxTemp();
    }, 1000);
    console.log('infinite');
  },
  refresh: function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      // this.dataList = [];
      // this.pageCode = 1;
      this.ajaxTemp();
    }, 1000);
  },
  init: function (mescroll) {
    this.mescroll = mescroll;
  },
  tabChange: function (index) {
    this.tabIndex = index;
    this.currentComponent = this.items[index].component;
  },
  ajaxRequestCollection: function () {
    this.$axios(apis.selectCollection,
      {PageIndex: 1, PageSize: 10})
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  }
};

export default controller;
