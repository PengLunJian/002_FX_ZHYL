import apis from '../../apis';

const controller = {
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestAllCards();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestAllCards();
    }, 500);
  },
  init(mescroll) {
    this.mescroll = mescroll;
  },
  insertSuffer() {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  ajaxRequestAllCards() {
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
  ajaxRequestDeleteUnbind(id) {
    this.$axios.post(apis.deleteUnbindCard, {Value: id})
      .then((res) => {
        this.$vux.toast.show({
          text: '解绑成功'
        });
        this.dataList = this.dataList.filter(item => item.Id !== id);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ajaxRequestUpdateDefault(id) {
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
  }
};

export default controller;
