<template>
  <div class="DSMK">
    <button class="btn btn-save" v-waves.blcok>保存</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: '',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .DSMK {
    padding: 0.3rem 0.15rem;
    .btn-save {
      display: block;
      width: 100%;
      line-height: 0.47rem;
      border-radius: @borderRadius;
      background-color: @buttonColor2;
      letter-spacing: 1px;
      font-size: 0.15rem;
      color: @white;
    }
  }
</style>
