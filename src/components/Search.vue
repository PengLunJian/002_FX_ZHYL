<template>
  <div class="module search">
    <div class="form-group">
      <label class="form-label icon-search" for="search"></label>
      <input type="text" id="search" class="form-input" name="search" placeholder="请输入科室、医生进行搜索"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'Search',
    data () {
      return {}
    },
    mounted () {

    }
  }
</script>

<style lang="less">
  @import "../assets/less/variable";

  .search {
    width: 100%;
    height: auto;
    margin-bottom: 0;
    padding: 0.075rem 0.15rem;
    background-color: @white;
    border-bottom: 1px solid #cccccc;
    .form-group {
      position: relative;
      .form-label {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.45rem;
        height: 100%;
        text-align: center;
        line-height: 0.3rem;
        color: #808080;
      }
      .form-input {
        display: block;
        width: 100%;
        height: 0.3rem;
        padding-left: 0.45rem;
        border-radius: 0.3rem;
        background-color: #f5f5f7;
        border: 1px solid #e6e6e6;
      }
    }
  }
</style>
