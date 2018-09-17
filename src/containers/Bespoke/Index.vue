<template>
  <div class="FX_ZHYL_BESPOKE">
    <Search></Search>
    <Menus></Menus>
  </div>
</template>

<script type="text/ecmascript-6">
  import Search from '../../components/Search'
  import Menus from './Menus'
  export default{
    components: {
      Menus,
      Search
    },
    name: 'Bespoke',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
  .FX_ZHYL_BESPOKE {
    position: relative;
  }
</style>
