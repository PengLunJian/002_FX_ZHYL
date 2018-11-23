import {mapActions} from 'vuex';
import {getQueryParams} from '../../utils';
import {
  jumpToWeChatUrl,
  saveLocalStorage
} from '../../login';

const controller = {
  initLogin() {
    const code = getQueryParams('code');
    if (!code) {
      jumpToWeChatUrl(this.appId, 'userinfo');
    } else {
      localStorage.removeItem('accessToken');
      const params = {Value: code};
      this.exeSelectDeviceId(params);
    }
  },
  exeSelectDeviceId(params) {
    this.selectDeviceId()
      .then((res) => {
        const {data} = res;
        localStorage.setItem('AccessToken', 'Bearer ' + data);
        this.selectGrantLogin(params)
          .then((res) => {
            const {data, success} = res;
            if (data && success) {
              saveLocalStorage(data);
              window.location.replace('/HOME');
            }
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
    'selectDeviceId',
    'selectGrantLogin'
  ])
};

export default controller;
