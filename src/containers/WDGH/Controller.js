import {mapActions, mapMutations} from 'vuex';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.exeSelectRegisterList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.exeSelectRegisterList();
    }, 500);
  },
  exeSelectRegisterList() {
    const data = {pageIndex: this.pageCode};
    this.selectRegisterList(data)
      .then((res) => {
        const {data} = res;
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
  exeDeleteRegisterList(id) {
    const data = {clinicNo: id};
    this.deleteRegisterList(data)
      .then((res) => {
        const {data} = res;
        const hasNext = data.length !== 10 ? false : true;
        if (this.mescroll) {
          this.mescroll.endSuccess(data.length, hasNext);
        }
        // res = res || {};
        // const {success, status} = res;
        // if (!success) {
        //   this.$vux.toast.show({
        //     type: 'cancel',
        //     text: status.msg
        //   });
        // }
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
  ...mapActions([
    'selectRegisterList',
    'deleteRegisterList'
  ]),
  ...mapMutations([
    'CLEAR_REGISTER_LIST_SUCCESS'
  ])
};

export default controller;
