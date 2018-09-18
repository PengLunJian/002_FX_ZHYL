<template>
  <div class="FX_ZHYL_HOME">
    <Patient></Patient>
    <News></News>
    <Navigation></Navigation>
  </div>
</template>

<script type="text/ecmascript-6">
  import Navigation from './Navigation.vue'
  import News from './News'
  import Patient from './Patient'
  export default{
    name: 'Home',
    components: {
      Patient,
      News,
      Navigation
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less">
</style>
