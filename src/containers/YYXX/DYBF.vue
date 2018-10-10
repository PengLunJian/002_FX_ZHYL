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


</style>
