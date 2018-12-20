import {mapActions} from 'vuex';

const controller = {
  handlerFilter(index, deptCode) {
    this.activeIndex = index;
    const data = {deptCode: deptCode};
    this.exeSelectSubDepartment(data);
  },
  handlerResult(deptCode) {
    const path = this.tabIndex ? this.$routes.KSXX.path : this.$routes.YSLB.path;
    const {query} = this.$route || {};
    const isExpert = this.tabIndex ? {isExpert: '0'} : {isExpert: '1'};
    let params = Object.assign(query, {deptCode: deptCode});
    params = Object.assign(query, isExpert);
    this.$router.push({
      path: path,
      query: params
    });
  },
  exeSelectDepartment() {
    const {query} = this.$route || {};
    this.selectDepartment(query)
      .then((res) => {
        res = res || {};
        const {success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectSubDepartment(data) {
    this.params = data;
    this.selectSubDepartment(data)
      .then((res) => {
        res = res || {};
        const {success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDepartment',
    'selectSubDepartment'
  ])
};

export default controller;
