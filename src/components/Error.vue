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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
      img {
        display: block;
        width: 1.1rem;
        margin-bottom: 0.1rem;
      }
      .btn-refresh {
        display: inline-block;
        line-height: 0.3rem;
        padding: 0 0.3rem;
        overflow: hidden;
        border-radius: 0.3rem;
        background-color: #5f9bf1;
        font-size: 0.12rem;
        color: @white;
      }
    }
  }
</style>
