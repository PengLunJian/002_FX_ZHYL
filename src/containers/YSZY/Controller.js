import {mapActions} from 'vuex';

const controller = {
  handlerClick(item) {
    console.log(item);
    // this.$router.push({
    //   path: this.$routes.YYXX.path
    // });
  },
  exeSelectDoctorDetail() {
    const {query} = this.$route || {};
    this.selectDoctorDetail(query)
      .then((res) => {
        res = res || res;
        const {data, success} = res;
        if (data && success) {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDoctorDetail'
  ])
};

export default controller;
