import {mapActions} from 'vuex';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
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
  insertVisitor() {
    this.$router.push({
      path: this.$routes.SFLR.path
    });
  },
  exeCommonCallback() {
    this.pageCode--;
    this.pageCode = this.pageCode <= 0 ? 1 : this.pageCode;
    this.$vux.toast.show({
      type: 'cancel',
      text: '加载失败'
    });
    if (this.mescroll) {
      this.mescroll.endErr();
    }
  },
  exeDeleteVisitorList(params) {
    params = {value: params};
    this.deleteVisitorList(params)
      .then((res) => {
        res = res || {};
        const {success} = res;
        if (success) {
          this.$vux.toast.show({
            text: '操作成功'
          });
        } else {
          this.$vux.toast.show({
            type: 'cancel',
            text: '操作失败'
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.$vux.toast.show({
          type: 'cancel',
          text: '操作失败'
        });
      });
  },
  exeUpdateVisitorList(params) {
    params = {value: params};
    this.updateVisitorList(params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (data && success) {
          this.$vux.toast.show({
            text: '操作成功'
          });
        } else {
          this.$vux.toast.show({
            type: 'cancel',
            text: '操作失败'
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.$vux.toast.show({
          type: 'cancel',
          text: '操作失败'
        });
      });
  },
  exeSelectVisitorList() {
    const data = {value: this.pageCode};
    this.selectVisitorList(data)
      .then((res) => {
        const {data, success} = res || {};
        if (success) {
          const {rows} = data || {};
          this.list = rows;
          const hasNext = rows.length !== 10 ? false : true;
          if (this.mescroll) {
            this.mescroll.endSuccess(rows.length, hasNext);
          }
        } else {
          this.exeCommonCallback();
        }
      })
      .catch((err) => {
        console.log(err);
        this.exeCommonCallback();
      });
  },
  exeClearVisitorList() {
    this.clearVisitorList();
  },
  ...mapActions([
    'insertVisitorList',
    'deleteVisitorList',
    'updateVisitorList',
    'selectVisitorList',
    'clearVisitorList'
  ])
};

export default controller;
