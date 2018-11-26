<template>
  <div class="module PBXX">
    <h2 class="title">
      <span>排班信息</span>
    </h2>
    <div class="context clear">2018/09/08&nbsp;全天&nbsp;
      <span>挂号时间：(07:30-16:30)</span>
      <button class="btn btn-register">去挂号</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'PBXX',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  .PBXX {
    height: auto;
    .context {
      line-height: 0.3rem;
      font-size: 0.16rem;
      padding: 0.22rem 0.15rem;
      span {
        color: #808080;
        font-size: 0.12rem;
      }
      .btn-register {
        float: right;
        display: block;
        line-height: 0.3rem;
        padding: 0 0.15rem;
        overflow: hidden;
        border-radius: 0.04rem;
        background-color: #dbecff;
        font-size: 0.12rem;
        color: #1673ea;
      }
    }
  }
</style>
