<template>
  <div id="app">
    <error v-if="isFailure" @refresh="initLogin"></error>
    <transition :name="transitionName" v-if="token">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions, mapState} from 'vuex';
  import Error from './components/Error';
  import {
    getQueryParams
  } from './utils';
  import {
    jumpToWeChatUrl,
    saveLocalStorage
  } from './login';

  export default {
    components: {Error},
    name: 'App',
    data() {
      return {
        transitionName: '',
        appId: 'wxe790a197b8d02b72',
        token: sessionStorage.getItem('AccessToken')
      };
    },
    created() {
      this.initLogin();
    },
    methods: {
      initLogin() {
        const {AccessToken} = sessionStorage;
        if (!AccessToken) {
          const url = window.location.href;
          const uri = '/#' + url.split('#')[1];
          const code = getQueryParams('code');
          if (!code) {
            jumpToWeChatUrl(this.appId);
          } else {
            const params = {value: code};
            this.exeSelectDeviceId(params, uri);
          }
        }
      },
      exeSelectDeviceId(params, uri) {
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
                    window.location.replace(uri);
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
    min-height: 100vh;
    background-color: @white;
  }
</style>
