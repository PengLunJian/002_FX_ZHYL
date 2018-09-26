<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <Loading :show="LOADING" :text="TEXT"></Loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'App',
    components: {
      Loading
    },
    data () {
      return {
        transitionName: ''
      }
    },
    methods: {
      setRootFontSize: function () {
        const width = document.documentElement.clientWidth ||
          document.body.clientWidth
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
//      this.$store.commit('showLoading')
      console.log(this.$store)
    },
    computed: {
      ...mapState([
        'LOADING',
        'TEXT'
      ])
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
</style>
