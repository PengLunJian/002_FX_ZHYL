<template>
  <div class="nav-item" @click="handlerClick">
    <img :src="item.image" class="nav-image"/>
    <span class="nav-title">{{item.title}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'NavItem',
    data() {
      return {};
    },
    props: [
      'item'
    ],
    methods: {
      handlerClick: function () {
        if (!this.item.disabled) {
          this.$router.push({
            path: this.item.path,
            query: this.item.query
          });
        } else {
          this.$vux.toast.show({
            type: 'text',
            text: '敬请期待',
            position: 'middle'
          });
        }
      }
    }
  };
</script>

<style scoped lang="less">
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
      border-top: @border;
    }
    &:not(:nth-of-type(3n)) {
      border-right: @border;
    }
  }
</style>
