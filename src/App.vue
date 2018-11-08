<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import LoginHelper from './loginHelper';

  export default {
    name: 'App',
    data() {
      return {
        transitionName: ''
      };
    },
    created() {
      /* eslint-disable no-new */
      new LoginHelper();
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
    }
  };
</script>

<style lang="less">
  @import "../node_modules/normalize.css/normalize.css";
  @import "assets/less/common.less";

  #app {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
</style>
