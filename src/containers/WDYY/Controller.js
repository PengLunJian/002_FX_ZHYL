import {mapActions, mapMutations} from 'vuex';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.exeSelectSubscribeList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.exeSelectSubscribeList();
    }, 500);
  },
  exeSelectSubscribeList() {
    const data = {pageIndex: this.pageCode};
    this.selectSubscribeList(data)
      .then((res) => {
        console.log(res);
        const {status, success, data} = res;
        const hasNext = data.length !== 10 ? false : true;
        if (this.mescroll) {
          this.mescroll.endSuccess(data.length, hasNext);
        }
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.pageCode--;
        this.pageCode = this.pageCode <= 0 ? 1 : this.pageCode;
        if (this.data.length !== 0) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '加载失败'
          });
        }
        if (this.mescroll) {
          this.mescroll.endErr();
        }
      });
  },
  exeDeleteSubscribeList(id) {
    const data = {subscribeId: id};
    this.deleteSubscribeList(data)
      .then((res) => {
        console.log(res);
        const {data, success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        } else if (success && data.state === '1') {
          this.$vux.toast.show({
            text: '取消成功'
          });
        }
        const hasNext = data.length !== 10 ? false : true;
        if (this.mescroll) {
          this.mescroll.endSuccess(data.length, hasNext);
        }
      })
      .catch((err) => {
        console.log(err);
        this.pageCode--;
        this.pageCode = this.pageCode <= 0 ? 1 : this.pageCode;
        if (this.data.length !== 0) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '加载失败'
          });
        }
        if (this.mescroll) {
          this.mescroll.endErr();
        }
      });
  },
  exeInsertDoRegister(id) {
    const data = {id};
    this.insertDoRegister(data)
      .then((res) => {
        console.log(res);
        const {data, success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        } else if (success && data.status === '1') {
          this.$vux.toast.show({
            text: '取号成功'
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.pageCode--;
        this.pageCode = this.pageCode <= 0 ? 1 : this.pageCode;
        if (this.data.length !== 0) {
          this.$vux.toast.show({
            type: 'cancel',
            text: '取号失败'
          });
        }
        if (this.mescroll) {
          this.mescroll.endErr();
        }
      });
  },
  ...mapActions([
    'selectSubscribeList',
    'deleteSubscribeList',
    'insertDoRegister'
  ]),
  ...mapMutations([
    'CLEAR_SUBSCRIBE_LIST_SUCCESS'
  ])
};

export default controller;
