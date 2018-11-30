import {mapActions} from 'vuex';

const controller = {
  handlerClick(item, number) {
    const {query} = this.$route;
    const params = {
      subSource: 'WX',
      preTime: item.seeDate,
      isExpert: query.isExpert,
      deptCode: this.data.deptCode,
      doctCode: this.data.doctCode,
      deptName: this.data.deptName,
      doctName: this.data.doctName,
      classId: item.schedulDay[number].classId,
      noonCode: item.schedulDay[number].noonCode,
      clinicFee: item.schedulDay[number].totalFee
    };
    this.$router.push({
      path: this.$routes.YYXX.path,
      query: params
    });
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
