import {mapActions} from 'vuex';
import {
  handlerWXConfig,
  handlerCheckJsApi,
  handlerChooseImage
} from '../../jssdk/WXHelper';

const controller = {
  handlerSubmit() {
    handlerChooseImage({count: 1});
  },
  exeSelectRegisterPay() {
    const data = {
      isPre: '0',
      onlyNo: '000001'
    };
    this.selectRegisterPay(data)
      .then((res) => {
        const {data} = res;
        if (!data) return;
        const jsApiList = ['chooseWXPay', 'chooseImage'];
        const config = Object.assign(data, {jsApiList: jsApiList});
        handlerWXConfig(config)
          .then(() => {
            handlerCheckJsApi(config)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectRegisterPay'
  ])
};

export default controller;
