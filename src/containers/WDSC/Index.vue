<template>
  <div class="FX_ZHYL_WDSC">
    <tab-bar :items="items"></tab-bar>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
    <list-item></list-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import TabBar from '../../components/TabBar'
  import ListItem from '../../components/ListItem'
  export default{
    components: {
      ListItem,
      TabBar},
    name: 'WDSC',
    data () {
      return {
        items: [
          {
            text: '医生'
          },
          {
            text: '科室'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
</style>
