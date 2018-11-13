import axios from '../../axios/axios';
import {mapActions} from 'vuex';
import {getQueryParams} from '../../utils';
import {
  redirectUrl,
  saveLocalStorage
} from '../../login';

const controller = {
  init() {
    const code = getQueryParams('code');
    if (!code) {
      redirectUrl(this.appId, 'base');
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
        const state = getQueryParams('state');
        if (state === 'base' || !state) {
          this.selectAutoLogin(params)
            .then((res) => {
              const {data, success} = res;
              if (data && success) {
                saveLocalStorage(data, this.exeSelectDefaultCard);
              } else {
                redirectUrl(this.appId, 'userinfo');
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } else if (state === 'userinfo') {
          this.selectManuLogin(params)
            .then((res) => {
              const {data, success} = res;
              if (data && success) {
                saveLocalStorage(data, this.exeSelectDefaultCard);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
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
    'selectAutoLogin',
    'selectManuLogin',
    'selectDefaultCard'
  ])
};

export default controller;
