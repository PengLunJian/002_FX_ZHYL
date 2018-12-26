import {mapActions} from 'vuex';

const controller = {
  handlerSubmit() {
    const {query} = this.$route || {};
    const {isPre} = query || {};
    if (parseInt(isPre)) {
      // 预约挂号
      this.exeSelectAppointmentCreate();
    } else {
      // 当日挂号
      this.exeSelectTodayCreate();
    }
  },
  exeFillParams() {
    const {query} = this.$route;
    this.name = this.data.name;
    this.price = query.clinicFee + ' 元';
    this.deptName = query.deptName;
    this.doctName = query.doctName;
    this.date = query.preTime + (query.noonCode === '1' ? ' 上午' : ' 下午');
  },
  exeSelectDefaultCard() {
    this.selectDefaultCard()
      .then((res) => {
        res = res || {};
        const {data, success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        } else {
          this.name = data.name;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectTodayCreate() {
    const {query} = this.$route || {};
    const data = {
      classId: query.classId,
      deptCode: query.deptCode,
      regLevel: query.regCode,
      regType: query.isExpert ? 'ZJ' : 'PT',
      clinicFee: query.clinicFee,
      doctCode: query.doctCode || '',
      noonCode: query.noonCode,
      regDate: query.preTime,
      regTime: query.timeSolt
    };
    this.selectTodayCreate(data)
      .then((res) => {
        res = res || {};
        const {success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        } else {
          this.$router.push({
            path: this.$routes.TJCG.path
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectAppointmentCreate() {
    const {query} = this.$route || {};
    const data = {
      classId: query.classId,
      deptCode: query.deptCode,
      isExpert: query.isExpert,
      preTime: query.preTime,
      clinicFee: query.clinicFee,
      subSource: query.subSource,
      doctCode: query.doctCode,
      noonCode: query.noonCode
    };
    this.selectAppointmentCreate(data)
      .then((res) => {
        res = res || {};
        const {success, status} = res;
        if (!success) {
          this.$vux.toast.show({
            type: 'cancel',
            text: status.msg
          });
        } else {
          this.$router.push({
            path: this.$routes.TJCG.path
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDefaultCard',
    'selectTodayCreate',
    'selectAppointmentCreate'
  ])
};

export default controller;
