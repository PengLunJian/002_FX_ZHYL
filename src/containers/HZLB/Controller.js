import apis from '../../apis';

const controller = {
  insertSuffer: function () {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  ajaxRequestUpdateDefault: function (id) {
    this.$axios.post(apis.updateDefault, {Value: id})
      .then((res) => {
        this.$vux.toast.show({
          text: '设置成功'
        });
        this.dataList.map((item) => {
          item.IsDefault = 0;
          if (item.Id === id) item.IsDefault = 1;
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ajaxRequestDeleteUnbind: function (id) {
    this.$axios.post(apis.deleteUnbindCard, {Value: id})
      .then((res) => {
        console.log(res);
        this.$vux.toast.show({
          text: '解绑成功'
        });
        this.dataList = this.dataList.filter(item => item.Id !== id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ajaxRequestAllCards: function () {
    this.$axios.post(apis.selectAllCards, {Page: this.pageCode})
      .then((res) => {
        this.$vux.loading.hide();
        if (this.pageCode === 1) this.dataList = [];
        const data = res.data.rows;
        const hasNext = data.length ? true : false;
        this.dataList = this.dataList.concat(data);
        this.mescroll.endSuccess(10, hasNext);
      })
      .catch((err) => {
        this.$vux.loading.hide();
        console.log(err);
      });
  },
  infinite: function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestAllCards();
    }, 500);
  },
  refresh: function () {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestAllCards();
    }, 500);
  },
  init: function (mescroll) {
    this.mescroll = mescroll;
  }
};

export default controller;
