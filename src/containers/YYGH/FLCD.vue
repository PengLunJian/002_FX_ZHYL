<template>
  <div class="module FLCD">
    <div class="col-xs-6 filter">
      <ul class="inner-block">
        <li class="btn btn-filter active" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
        <li class="btn btn-filter" @click="handlerFilter">专科专病</li>
      </ul>
    </div>
    <div class="col-xs-6 result">
      <ul class="inner-block">
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
        <li class="btn btn-result" @click="handlerResult">心里咨询</li>
      </ul>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';

  export default {
    name: 'Menus',
    data() {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FLCD {
    height: 100%;
    margin-bottom: 0;
    .filter {
      height: 100%;
      overflow-y: auto;
      background-color: @bgColor;
      -webkit-overflow-scrolling: touch;
      .inner-block {
        .btn-filter {
          height: 0.45rem;
          position: relative;
          line-height: 0.45rem;
          padding-left: 0.3rem;
          border-bottom: 1px solid #d9d9d9;
          font-size: 0.14rem;
          &.active {
            color: @activeColor;
            background-color: @white;
            &:after {
              content: '';
              width: auto;
              height: auto;
              display: block;
              position: absolute;
              top: 50%;
              left: 0.15rem;
              visibility: visible;
              margin-top: -0.05rem;
              border-top: 0.05rem solid transparent;
              border-left: 0.08rem solid @activeColor;
              border-bottom: 0.05rem solid transparent;
            }
          }
        }
      }
    }
    .result {
      height: 100%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .inner-block {
        .btn-result {
          height: 0.45rem;
          line-height: 0.45rem;
          padding-left: 0.3rem;
          font-size: 0.14rem;
        }
      }
    }
  }
</style>
