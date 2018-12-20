<template>
  <div class="error">
    <div class="content">
      <img src="../assets/images/error.png"/>
      <button class="btn btn-refresh" @click="handlerRefresh">重新加载</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'error',
    data() {
      return {};
    },
    methods: {
      handlerRefresh() {
        this.$emit('refresh');
      }
    }
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .error {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 0;
    color: @borderColor2;
    position: absolute;
    &:before {
      content: '';
      height: 100%;
      display: inline-block;
      vertical-align: middle;
    }
    .content {
      display: inline-block;
      vertical-align: middle;
      img {
        display: block;
        width: 0.8rem;
        margin: 0 auto 0.1rem;
      }
      .btn-refresh {
        display: block;
        height: 0.26rem;
        line-height: 0.26rem;
        padding: 0 0.2rem;
        overflow: hidden;
        border-radius: 0.3rem;
        background-color: #5f9bf1;
        font-size: 0.12rem;
        color: @white;
      }
    }
  }
</style>
