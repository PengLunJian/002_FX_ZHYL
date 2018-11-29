import {mapActions} from 'vuex';

const controller = {
  handlerClick(item) {
    console.log(item);
    this.$router.push({
      path: this.$routes.YYXX.path
    });
  },
  exeSelectDepartmentDetail() {
    const {query} = this.$route;
    this.selectDepartmentDetail(query)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDepartmentDetail'
  ])
};

export default controller;
