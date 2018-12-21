<template>
  <div id="app">
    <error v-if="isFailure" @refresh="exeRefresh"></error>
    <transition :name="transitionName" v-if="token">
      <router-view></router-view>
    </transition>
    <footer-bar></footer-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapState} from 'vuex';
  import Error from './components/Error';
  import {getQueryParams} from './utils';
  import {linkToWXPage, saveLocalStorage} from './login';
  import FooterBar from './components/FooterBar';

  export default {
    components: {
      FooterBar,
      Error
    },
    name: 'App',
    data() {
      return {
        transitionName: '',
        token: sessionStorage.getItem('AccessToken')
      };
    },
    created() {
      this.exeLogin();
    },
    methods: {
      exeLogin() {
        const {AccessToken} = sessionStorage;
        if (!AccessToken) {
          const code = getQueryParams('code');
          if (!code) {
            const baseUrl = window.location.href;
            sessionStorage.setItem('baseUrl', baseUrl);
            linkToWXPage();
          } else {
            if (this.exeCheckCode(code)) {
              this.exeRefresh();
            }
            sessionStorage.setItem('baseCode', code);
            const params = {value: code};
            this.exeSelectDeviceId(params);
          }
        }
      },
      exeRefresh() {
        const {baseUrl} = sessionStorage || window.location.href;
        window.location.replace(baseUrl);
      },
      exeCheckCode(code) {
        let result = false;
        const {baseCode} = sessionStorage;
        if (baseCode && baseCode === code) {
          result = true;
        }
        return result;
      },
      exeSelectDeviceId(params) {
        this.selectDeviceId()
          .then((res) => {
            res = res || {};
            const {data, success} = res;
            if (success) {
              sessionStorage.setItem('AccessToken', 'Bearer ' + data);
              this.selectGrantLogin(params)
                .then((res) => {
                  const {data, success} = res;
                  if (success) {
                    saveLocalStorage(data);
                    const {baseUrl} = sessionStorage;
                    window.location.replace(baseUrl);
                  } else {
                    sessionStorage.removeItem('AccessToken');
                  }
                })
                .catch((err) => {
                  sessionStorage.removeItem('AccessToken');
                  console.log(err);
                });
            } else {
              sessionStorage.removeItem('AccessToken');
            }
          })
          .catch((err) => {
            sessionStorage.removeItem('AccessToken');
            console.log(err);
          });
      },
      ...mapActions([
        'selectDeviceId',
        'selectGrantLogin'
      ])
    },
    watch: {
      $route(to, from) {
        if (from.meta.index !== undefined) {
          if (to.meta.index > from.meta.index) {
            this.transitionName = 'slide-left';
          } else {
            this.transitionName = 'slide-right';
          }
        }
      }
    },
    computed: mapState({
      isLoading: state => state.GRANT_LOGIN.isLoading,
      isSuccess: state => state.GRANT_LOGIN.isSuccess,
      isFailure: state => state.GRANT_LOGIN.isFailure,
      data: state => state.GRANT_LOGIN.data
    })
  };
</script>

<style lang="less">
  @import "../node_modules/normalize.css/normalize.css";
  @import "assets/less/common.less";

  #app {
    z-index: 0;
    height: 100vh;
    position: relative;
    background-color: @white;
    -webkit-overflow-scrolling: touch;
  }
</style>
