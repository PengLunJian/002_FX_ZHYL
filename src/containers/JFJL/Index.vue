<template>
  <div class="FX_ZHYL_JFJL">
    <j-f-t-b @change="change"></j-f-t-b>
    <j-f-r-q :initIndex="initIndex"></j-f-r-q>
  </div>
</template>

<script type="text/ecmascript-6">
  import JFTB from './JFTB'
  import JFRQ from './JFRQ'
  export default{
    components: {
      JFRQ,
      JFTB
    },
    name: '',
    data () {
      return {
        initIndex: 0
      }
    },
    methods: {
      change (value) {
        this.initIndex = value
      }
    },
    mounted () {}
  }
</script>

<style lang="less">
</style>
