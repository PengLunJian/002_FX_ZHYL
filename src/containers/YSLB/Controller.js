import {mapActions} from 'vuex';

const controller = {
  handleFilter(index) {
    this.activeIndex = index;
    this.exeSelectDoctorList();
  },
  exeSelectDoctorList() {
    const {query} = this.$route || {};
    const sort = {sort: (this.activeIndex + 1) + ''};
    const params = Object.assign(sort, query);
    this.selectDoctorList(params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (data && success) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDoctorList'
  ])
};

export default controller;
