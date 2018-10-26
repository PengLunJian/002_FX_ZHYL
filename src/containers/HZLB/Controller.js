import apis from '../../apis';

const controller = {
  insertSuffer: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  defaultLock: function () {
    console.log(2);
  },
  defaultUnlock: function () {
    console.log(1);
  },
  ajaxRequestAllCards: function () {
    this.$axios.post(apis.selectAllCards.url, {Page: this.pageCode})
      .then((res) => {
        console.log(res);
        this.$vux.loading.hide();
        const data = res.data.rows;
        this.dataList = this.dataList.concat(data);
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
    // const hasNext = !(this.dataList.length > 30);
    // if (hasNext) {
    //   this.dataList = this.dataList.concat(this.items);
    // }
    this.mescroll.endSuccess(10, true);
  },
  infinite: function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestAllCards();
    }, 1000);
    console.log('infinite');
  },
  refresh: function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.dataList = [];
      this.pageCode = 1;
      this.ajaxRequestAllCards();
    }, 1000);
  },
  init: function (mescroll) {
    this.mescroll = mescroll;
  }
};

export default controller;
