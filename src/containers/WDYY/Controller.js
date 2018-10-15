import apis from '../../apiMain';

const controller = {
  ajaxWDYY: function () {
    this.$axios(apis.wdyy, {pageIndex: 2})
      .then((response) => {
        const {data} = response;
        if (!data.length) {
          this.isShow = true;
          return;
        }
        this.items = this.items.concat(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  refresh: function () {
    console.log('refresh');
    this.timeout = setTimeout(() => {
      this.$refs.scroller.finishPullToRefresh();
    }, 1500);
  },
  downCallback: function () {
    console.log('down');
  },
  upCallback: function (page, mescroll) {
    console.log('infinite');
    // const temp = [{slotOut: false}, {slotOut: false}];
    // this.timeout = setTimeout(() => {
    //   if (this.items.length >= 20) {
    //     this.$refs.scroller.finishInfinite(true);
    //   } else {
    //     this.$refs.scroller.finishInfinite(false);
    //   }
    //   this.items = this.items.concat(temp);
    // }, 1500);
  },
  mescrollInit: function (mescroll) {
    this.$refs.mescroll = mescroll;
  }
};

export default controller;
