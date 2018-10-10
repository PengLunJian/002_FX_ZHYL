<template>
  <div class="module FLCD">
    <div class="col-xs-6 menu-lt">
      <ul class="menu-buttons">
        <li class="menu-button active" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
        <li class="menu-button" v-waves.block>专科专病</li>
      </ul>
    </div>
    <div class="col-xs-6 menu-rt" @click="handlerClick">
      <ul class="menu-results">
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
        <li class="menu-result">心里咨询</li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'FLCD',
    data() {
      return {};
    },
    methods: Controller,
    mounted() {
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FLCD {
    margin-bottom: 0;
    height: calc(100vh - 0.45rem);
    .menu-lt {
      height: 100%;
      overflow-y: auto;
      background-color: #f5f5f5;
      -webkit-overflow-scrolling: touch;
      .menu-buttons {
        .menu-button {
          height: 0.45rem;
          position: relative;
          line-height: 0.45rem;
          padding-left: 0.3rem;
          border-bottom: 1px solid #d9d9d9;
          font-size: 0.14rem;
          &.active {
            color: @activeColor;
            background-color: @white;
            &:before {
              content: '';
              display: block;
              position: absolute;
              top: 50%;
              left: 0.15rem;
              margin-top: -0.05rem;
              border-top: 0.05rem solid transparent;
              border-left: 0.08rem solid @activeColor;
              border-bottom: 0.05rem solid transparent;
            }
          }
        }
      }
    }
    .menu-rt {
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .menu-results {
        .menu-result {
          height: 0.45rem;
          line-height: 0.45rem;
          padding-left: 0.3rem;
          font-size: 0.14rem;
        }
      }
    }
  }
</style>
