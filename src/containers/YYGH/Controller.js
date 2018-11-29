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
    const params = Object.assign(query, {deptCode: deptCode});
    this.$router.push({
      path: path,
      query: params
    });
  },
  exeSelectDepartment() {
    const {query} = this.$route || {};
    this.selectDepartment(query)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectSubDepartment(data) {
    this.selectSubDepartment(data)
      .then((res) => {
        console.log(res);
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
