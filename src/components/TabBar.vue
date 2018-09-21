<template>
  <div class="tab-bar">
    <div class="tab-item waves-effect waves-block" :class="{active:index==initIndex}"
         v-for="(item , index) in this.items"
         @click="tabChange(index)" :key="index"
         v-waves.block>
      {{item.text}}
    </div>
    <div class="border" :style="borderStyle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'TabBar',
    props: ['items'],
    methods: {
      tabChange (index) {
        this.setBorderStyle(index)
      },
      setBorderStyle (index) {
        const value = 100 * index
        this.initIndex = index
        this.borderStyle = 'transform:translateX(' + value + '%);'
      }
    },
    data () {
      return {
        active: 'active',
        initIndex: 0,
        borderStyle: ''
      }
    },
    mounted () {

    }
  }
</script>

<style lang="less">
  @import "../assets/less/variable";

  .tab-bar {
    height: auto;
    position: relative;
    text-align: center;
    background-color: @white;
    border-bottom: 1px solid @borderColor;
    font-size: 0.16rem;
    .tab-item {
      width: 50%;
      float: left;
      height: 0.45rem;
      line-height: 0.45rem;
      &.active {
        color: @buttonColor2;
      }
    }
    .border {
      width: 50%;
      position: absolute;
      left: 0;
      bottom: -1px;
      transition: all 300ms ease-out;
      border-top: 3px solid @buttonColor2;
    }
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
</style>
