import {mapActions, mapMutations} from 'vuex';

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
    if (this.mescroll) {
      this.mescroll.endErr();
    }
  },
  exeDeleteVisitorList(params) {
    const result = confirm('确认解绑就诊卡吗?');
    if (result) {
      params = {value: params};
      this.deleteVisitorList(params)
        .then((res) => {
          res = res || {};
          const {success, status} = res;
          if (!success) {
            this.$vux.toast.show({
              type: 'cancel',
              text: status.msg
            });
          } else {
            this.$vux.toast.show({
              text: '操作成功'
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
  exeUpdateVisitorList(params) {
    params = {value: params};
    this.updateVisitorList(params)
      .then((res) => {
        res = res || {};
        const {success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        } else {
          this.$vux.toast.show({
            text: '操作成功'
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectVisitorList() {
    const data = {value: this.pageCode};
    this.selectVisitorList(data)
      .then((res) => {
        res = res || {};
        const {data, success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
          this.exeCommonCallback();
        } else {
          const {rows} = data || {};
          const hasNext = rows.length !== 10 ? false : true;
          if (this.mescroll) {
            this.mescroll.endSuccess(rows.length, hasNext);
          }
        }
      })
      .catch((err) => {
        this.exeCommonCallback();
        console.log(err);
      });
  },
  ...mapActions([
    'insertVisitorList',
    'deleteVisitorList',
    'updateVisitorList',
    'selectVisitorList'
  ]),
  ...mapMutations([
    'CLEAR_VISITOR_LIST_SUCCESS'
  ])
};

export default controller;
