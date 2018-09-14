<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    methods: {
      setRootFontSize: function () {
        const width = document.documentElement.clientWidth || document.body.clientWidth
        const fontSize = (width / 3.75) + 'px'
        document.querySelector('html').style.fontSize = fontSize
      },
      windowOnResize: function () {
        window.onresize = () => {
          this.setRootFontSize()
        }
      }
    },
    mounted: function () {
      this.setRootFontSize()
      this.windowOnResize()
    }
  }
</script>

<style lang="less">
  @import "../node_modules/normalize.css/normalize.css";
  @import "assets/less/common.less";

  #app {
    min-height: 100vh;
  }
</style>
