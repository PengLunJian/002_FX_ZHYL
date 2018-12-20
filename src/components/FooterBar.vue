<template>
  <div class="footer">
    <div class="item btn" v-for="(item,index) in data"
         :class="activeIndex===index?'active':''"
         @click="showPage(item,index)" :key="index">
      <i class="icon" :class="item.icon"></i>
      <p class="text">{{item.text}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterBar',
    data() {
      return {
        activeIndex: 1,
        data: [
          {
            name: this.$routes.YYGH.name,
            icon: 'icon-register',
            text: '挂号',
            path: this.$routes.YYGH.path
          },
          {
            name: this.$routes.HOME.name,
            icon: 'icon-index',
            text: '首页',
            path: this.$routes.HOME.path
          },
          {
            name: this.$routes.GRZX.name,
            icon: 'icon-user',
            text: '个人中心',
            path: this.$routes.GRZX.path
          }
        ]
      };
    },
    methods: {
      showPage(item, index) {
        this.activeIndex = index;
        this.$router.replace({
          path: item.path
        });
      }
    },
    watch: {
      $route() {
        this.$nextTick(() => {
          const {name} = this.$route;
          this.data.map((item, index) => {
            if (item.name === name) {
              this.activeIndex = index;
            }
          });
        });
      }
    }
  };
</script>

<style lang="less">
  @import "../assets/less/variable";

  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1050;
    text-align: center;
    box-shadow: @boxShadow;
    background-color: #F7FAFF;
    border-top: 1px solid @borderColor;
    &:after {
      content: '';
      display: block;
      clear: both;
    }
    .item {
      float: left;
      width: 33.333%;
      height: 0.5rem;
      line-height: 0.5rem;
      color: @fontColor2;
      font-size: 0;
      .icon {
        margin-right: 0.06rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.17rem;
      }
      .text {
        letter-spacing: 1px;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.15rem;
      }
      &.active {
        color: @buttonColor2;
      }
    }
  }
</style>
