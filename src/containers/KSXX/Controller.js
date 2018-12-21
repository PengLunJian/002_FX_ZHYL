import {mapActions} from 'vuex';

const controller = {
  handlerClick(item, number) {
    if (item.schedulDay[number].isRegister === '1') {
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
    }
  },
  exeSelectDepartmentDetail() {
    const {query} = this.$route || {};
    this.selectDepartmentDetail(query)
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
    'selectDepartmentDetail'
  ])
};

export default controller;
