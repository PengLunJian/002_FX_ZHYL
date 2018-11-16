import {mapActions} from 'vuex';

const controller = {
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
        console.log(data);
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
      });
  },
  ...mapActions([
    'selectDoctorList'
  ])
};

export default controller;
