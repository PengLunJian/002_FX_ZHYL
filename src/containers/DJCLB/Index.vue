<template>
  <div class="FX_ZHYL_DJCLB">
    <d-j-c-m-k v-for="(item,index) in items" :key="index"></d-j-c-m-k>
  </div>
</template>

<script type="text/ecmascript-6">
  import DJCMK from './DJCMK'
  export default{
    components: {DJCMK},
    name: 'DJCLB',
    data () {
      return {
        items: [
          {}, {}, {}, {}, {}, {}
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="less">
</style>
