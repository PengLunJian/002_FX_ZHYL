import {mapActions} from 'vuex';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.exeSelectDoctorList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.exeSelectDoctorList();
    }, 500);
  },
  handleFilter(index) {
    this.date = index;
    this.pageCode = 1;
    this.status = index;
    this.exeSelectDoctorList();
  },
  exeSelectDoctorList() {
    const data = {date: this.date, pageIndex: this.pageCode};
    this.selectDoctorList(data)
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
  ...mapActions([
    'selectDoctorList'
  ])
};

export default controller;
