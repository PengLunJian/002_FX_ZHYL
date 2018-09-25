<template>
  <div class="nav-item" @click="handlerClick">
    <img :src="image" class="nav-image"/>
    <span class="nav-title">{{title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'NavItem',
    data () {
      return {}
    },
    props: [
      'image', 'title', 'path', 'disabled'
    ],
    methods: {
      handlerClick: function () {
        if (!this.disabled) {
          this.$router.push({
            path: this.path
          })
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: '敬请期待',
            position: 'middle'
          })
        }
      }
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  @import "../assets/less/variable";

  .nav-item {
    float: left;
    width: 33.333%;
    padding: 0.15rem 0;
    position: relative;
    .nav-image {
      display: block;
      width: 0.55rem;
      height: 0.55rem;
      margin: 0 auto 0.1rem;
    }
    .nav-title {
      display: block;
      height: 0.14rem;
      line-height: 0.14rem;
      text-align: center;
    }
    &:nth-child(n+4) {
      border-top: 1px solid @borderColor;
    }
    &:not(:nth-of-type(3n)) {
      border-right: 1px solid @borderColor;
    }
  }
</style>
