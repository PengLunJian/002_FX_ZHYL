import {mapActions} from 'vuex';

const controller = {
  handlerClick(item, number) {
    if (item.schedulDay[number].isRegister === '1') {
      const {query} = this.$route;
      const params = {
        subSource: 'WX',
        isPre: query.isPre,
        preTime: item.seeDate,
        isExpert: query.isExpert,
        deptCode: this.data.deptCode,
        doctCode: this.data.doctCode,
        deptName: this.data.deptName,
        doctName: this.data.doctName,
        classId: item.schedulDay[number].classId,
        regCode: item.schedulDay[number].regCode,
        timeSolt: item.schedulDay[number].timeSolt,
        noonCode: item.schedulDay[number].noonCode,
        clinicFee: item.schedulDay[number].totalFee
      };
      this.$router.push({
        path: this.$routes.YYXX.path,
        query: params
      });
    }
  },
  exeSelectDoctorDetail() {
    const {query} = this.$route || {};
    this.selectDoctorDetail(query)
      .then((res) => {
        res = res || res;
        const {data, success} = res;
        if (data && success) {
          console.log(data);
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
