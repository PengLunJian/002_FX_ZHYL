<template>
  <div class="error">
    <div class="content">
      <i class="icon-error"></i>
      <p class="text">连接失败</p>
      <button class="btn btn-refresh">重新加载</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'error',
    props: ['isShow']
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .error {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @white;
    text-align: center;
    font-size: 0;
    color: @borderColor2;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .content {
      display: inline-block;
      vertical-align: middle;
    }
    .icon-error {
      display: block;
      margin-bottom: 0.1rem;
      font-size: 0.3rem;
    }
    .text {
      margin-right: 0.05rem;
      display: inline-block;
      line-height: 0.2rem;
      font-size: 0.13rem;
    }
    .btn-refresh {
      display: inline-block;
      height: 0.2rem;
      padding: 0 0.06rem;
      border-radius: 0.2rem;
      border: 1px solid @borderColor2;
      font-size: 0.12rem;
      color: @borderColor2;
    }
  }
</style>
