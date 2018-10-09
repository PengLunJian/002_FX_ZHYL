<template>
  <div class="tab-list">
    <pay-item></pay-item>
    <pay-item></pay-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import PayItem from '../../components/PayItem';
  export default{
    components: {PayItem},
    name: 'TabContentOne',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
</style>
