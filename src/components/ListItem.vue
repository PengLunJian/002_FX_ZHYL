<template>
  <div class="list-item">
    <div class="item-img">
      <img src="../assets/images/doctor@2x.png"/>
    </div>
    <div class="item-info">
      <span class="item-name ellipsis">杨永信</span>
      <span class="item-post ellipsis">职称：正主任医师</span>
      <span class="item-good ellipsis">擅长：电疗、别紧张</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ListItem',
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .list-item {
    height: auto;
    position: relative;
    padding-left: 0.7rem;
    background-color: @white;
    border-bottom: 1px solid @borderColor;
    .item-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 0.7rem;
      height: 100%;
      font-size: 0;
      text-align: right;
      img {
        width: 0.55rem;
        height: 0.55rem;
        display: inline-block;
        vertical-align: middle;
      }
      &:before {
        content: '';
        height: 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .item-info {
      padding: 0.2rem 0 0.2rem 0.1rem;
      span {
        display: block;
        line-height: 0.2rem;
      }
      .item-name {
        font-size: 0.14rem;
      }
      .item-post {
        color: @fontColor;
        font-size: 0.12rem;
      }
      .item-good {
        color: @fontColor;
        font-size: 0.12rem;
      }
    }
  }
</style>
