<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'App',
    data () {
      return {
        transitionName: ''
      }
    },
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
    mounted () {
      this.setRootFontSize()
      this.windowOnResize()
    },
    watch: {
      $route (to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-left'
        } else {
          this.transitionName = 'slide-right'
        }
      }
    }
  }
</script>

<style lang="less">
  @import "../node_modules/normalize.css/normalize.css";
  @import "assets/less/common.less";

  #app {
    min-height: 100vh;
    position: relative;
  }

  /*路由切换动画*/
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 100vh;
    will-change: transform;
    transition: all 500ms ease;
    background-color: @bgColor;
  }

  .slide-right-enter {
    /*opacity: 0;*/
    transform: translate3d(-100%, 0, 0);
  }

  .slide-right-leave-active {
    /*opacity: 0;*/
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-enter {
    /*opacity: 0;*/
    transform: translate3d(100%, 0, 0);
  }

  .slide-left-leave-active {
    /*opacity: 0;*/
    transform: translate3d(-100%, 0, 0);
  }
</style>
