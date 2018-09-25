<template>
  <div class="tab-list">
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import ListItem from '../../components/ListItem'
  export default{
    components: {ListItem},
    name: 'TabContentTwo',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  .tab-list {
  }
</style>
