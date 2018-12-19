import {mapActions} from 'vuex';
import {
  handlerWXConfig
  // handlerCheckJsApi,
  // handlerChooseWXPay
} from '../../jssdk/WXHelper';

const controller = {
  handlerSubmit() {
    this.exeSelectAppointmentCreate();
    // handlerCheckJsApi(this.jsApiList)
    //   .then((res) => {
    //     console.log(res);
    //
    //   });
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
        const {data, success} = res;
        if (success) {
          this.name = data.name;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectJSSDKConfig() {
    const data = {
      value: window.location.href.split('#')[0]
    };
    this.selectJSSDKConfig(data)
      .then((res) => {
        const {data, success} = res;
        if (success) {
          const config = Object.assign(data, this.jsApiList);
          handlerWXConfig(config);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectAppointmentCreate() {
    const {query} = this.$route;
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
        debugger;
        const {data, success} = res;
        if (success) {
          console.log(data);
          // if (!data) return;
          // handlerChooseWXPay(data)
          //   .then((res) => {
          //     console.log(res);
          //     this.$router.back();
          //   });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectJSSDKConfig',
    'selectDefaultCard',
    'selectAppointmentCreate'
  ])
};

export default controller;
