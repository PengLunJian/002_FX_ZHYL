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
  export default {
    name: 'App',
    components: {},
    data() {
      return {
        transitionName: ''
      };
    },
    methods: {
      setRootFontSize: function () {
        const width = document.documentElement.clientWidth ||
          document.body.clientWidth;
        const fontSize = (width / 3.75) + 'px';
        document.querySelector('html').style.fontSize = fontSize;
      },
      windowOnResize: function () {
        window.onresize = () => {
          this.setRootFontSize();
        };
      }
    },
    mounted() {
      this.setRootFontSize();
      this.windowOnResize();
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
