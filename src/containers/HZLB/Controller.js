import {mapActions} from 'vuex';

const controller = {
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.exeSelectVisitorList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.exeSelectVisitorList();
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
  exeSelectVisitorList() {
    this.$vux.loading.show({
      text: '加载中...'
    });
    const data = {Value: this.pageCode};
    this.selectVisitorList(data)
      .then((res) => {
        console.log(res);
        const data = res.data.rows;
        this.$vux.loading.hide();
        const hasNext = data.length !== 10 ? false : true;
        if (this.mescroll) {
          this.mescroll.endSuccess(10, hasNext);
        }
      })
      .catch((err) => {
        console.log(err);
        this.$vux.loading.hide();
        if (this.mescroll) {
          this.mescroll.endSuccess(10, true);
        }
      });
  },
  ...mapActions([
    'insertVisitorList',
    'deleteVisitorList',
    'updateVisitorList',
    'selectVisitorList'
  ])
};

export default controller;
