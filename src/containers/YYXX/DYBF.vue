<template>
  <div class="module DYBF">
    <div class="form-group" v-waves.block>
      <label class="form-label">就诊人</label>
      <input class="form-input icon" name="name" value="胡代宇" type="text"/>
      <i class="form-icon icon-next"></i>
    </div>
    <div class="form-group" v-waves.block>
      <label class="form-label">就诊时间</label>
      <input class="form-input" name="name" value="2017/07/18 下午" type="text"/>
    </div>
    <div class="form-group" v-waves.block>
      <label class="form-label">就诊科室</label>
      <input class="form-input" name="name" value="眼科" type="text"/>
    </div>
    <div class="form-group" v-waves.block>
      <label class="form-label borderNone">医生姓名</label>
      <input class="form-input" name="name" value="胡代宇" type="text"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'DYBF',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .module {
    background-color: transparent;
    box-shadow: none;
  }

  .form-group {
    position: relative;
    padding: 0 0 0 0.15rem;
    background-color: @white;
    .form-label {
      display: block;
      height: 0.5rem;
      line-height: 0.5rem;
      border-bottom: 1px solid #e5e5e5;
      font-size: 0.14rem;
    }
    .form-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: block;
      padding-right: 0.15rem;
      background-color: transparent;
      text-align: right;
      font-size: 0.14rem;
      color: #808080;
      &.icon {
        padding-right: 0.4rem;
      }
    }
    .form-icon {
      position: absolute;
      top: 0;
      right: 0;
      width: 0.4rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
    }
  }

  .btn-submit {
    width: 90%;
    height: 0.5rem;
    display: block;
    margin: 0.35rem auto;
    line-height: 0.5rem;
    background-color: #0062eb;
    border-radius: @borderRadius;
    font-size: 0.16rem;
    color: @white;
  }
</style>
