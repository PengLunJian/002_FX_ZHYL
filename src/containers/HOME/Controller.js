import axios from '../../axios/axios';
import {mapActions} from 'vuex';
import {getQueryParams} from '../../utils';
import {
  jumpToWeChatUrl,
  saveLocalStorage
} from '../../login';

const controller = {
  init() {
    const code = getQueryParams('code');
    if (!code) {
      jumpToWeChatUrl(this.appId, 'userinfo');
    } else {
      const params = {Value: code};
      this.exeSelectDeviceId(params);
    }
  },
  addVisitor() {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  showQRCode() {
    this.$router.push({
      path: this.$routes.JZTM.path
    });
  },
  showContent() {
    if (this.clazz === 'hide') {
      const element = document.querySelector('html');
      const fontSize = parseFloat(element.style.fontSize);
      const height = this.$refs.inner.offsetHeight;
      this.style = 'height:' + (height / fontSize) + 'rem;';
      this.clazz = '';
    } else {
      this.style = 'height:' + 0 + 'px;';
      this.clazz = 'hide';
    }
  },
  changeVisitor() {
    this.$router.push({
      path: this.$routes.HZLB.path
    });
  },
  exeSelectDeviceId(params) {
    this.selectDeviceId()
      .then((res) => {
        const {data} = res;
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + data;
        this.selectGrantLogin(params)
          .then((res) => {
            const {data, success} = res;
            if (data && success) {
              saveLocalStorage(data);
              this.exeSelectDefaultCard();
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
  exeSelectDefaultCard() {
    this.selectDefaultCard()
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDeviceId',
    'selectGrantLogin',
    'selectDefaultCard'
  ])
};

export default controller;
