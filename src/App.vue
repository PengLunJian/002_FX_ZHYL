<template>
  <div id="app">
    <error v-if="isFailure" @refresh="exeRefresh"></error>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapState} from 'vuex';
  import Error from './components/Error';
  import {getQueryParams} from './utils';
  import {jumpToWeChatUrl, saveLocalStorage} from './login';
  // import {handlerWXConfig, handlerCloseWindow} from './jssdk/WXHelper';

  export default {
    components: {Error},
    name: 'App',
    data() {
      return {
        transitionName: '',
        appId: 'wxe790a197b8d02b72',
        token: sessionStorage.getItem('AccessToken'),
        jsApiList: {jsApiList: ['closeWindow']}
      };
    },
    created() {
      // this.exeLogin();
      // this.exeSelectJSSDKConfig();
      // this.selectDeviceId()
      //   .then((res) => {
      //     res = res || {};
      //     const {data, success} = res;
      //     if (success) {
      //       sessionStorage.setItem('AccessToken', 'Bearer ' + data);
      //     }
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    methods: {
      exeLogin() {
        const {AccessToken} = sessionStorage;
        if (!AccessToken) {
          const code = getQueryParams('code');
          if (!code) {
            // handlerCloseWindow();
            const baseUrl = window.location.href;
            sessionStorage.setItem('baseUrl', baseUrl);
            jumpToWeChatUrl(this.appId);
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
      // exeSelectJSSDKConfig() {
      //   const data = {
      //     value: window.location.href.split('#')[0]
      //   };
      //   this.selectJSSDKConfig(data)
      //     .then((res) => {
      //       const {data, success} = res;
      //       if (success) {
      //         const config = Object.assign(data, this.jsApiList);
      //         handlerWXConfig(config);
      //       }
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // },
      ...mapActions([
        'selectDeviceId',
        'selectGrantLogin',
        'selectJSSDKConfig'
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
    /*overflow-y: auto;*/
    -webkit-overflow-scrolling: touch;
  }
</style>
