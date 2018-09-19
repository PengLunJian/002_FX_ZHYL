<template>
  <div class="JFRQ">
    <div class="tab-container clear" :style="returnStyle">
      <div class="tab-content">
        <j-f-l-b></j-f-l-b>
        <j-f-l-b></j-f-l-b>
      </div>
      <div class="tab-content">
        <j-f-l-b></j-f-l-b>
        <j-f-l-b></j-f-l-b>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import JFLB from './JFLB'
  export default{
    components: {JFLB},
    name: 'JFRQ',
    data () {
      return {
        style: ''
      }
    },
    props: ['initIndex'],
    methods: {
      getStyle () {
        const value = -50 * this.initIndex
        this.style = 'transform:translateX(' + value + '%)'
        return this.style
      }
    },
    mounted () {},
    computed: {
      returnStyle () {
        return this.getStyle()
      }
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .JFRQ {
    overflow: hidden;
    .tab-container {
      width: 200%;
      transition: all 300ms ease-out;
      .tab-content {
        width: 50%;
        float: left;
      }
    }
  }
</style>
