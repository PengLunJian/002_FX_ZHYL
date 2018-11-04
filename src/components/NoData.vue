<template>
  <div class="no-data">
    <div class="content">
      <img src="../assets/images/no_data.png"/>
      <p class="text">暂无数据</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'no-data',
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .no-data {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: @white;
    text-align: center;
    font-size: 0;
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
        width: 1.25rem;
        height: auto;
      }
      .text {
        margin-top: 0.1rem;
        letter-spacing: 1px;
        font-size: 0.14rem;
        color: #808080;
      }
    }
  }
</style>
