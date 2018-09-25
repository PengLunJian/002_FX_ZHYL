<template>
  <div class="tab-slider">
    <div class="tab-bar">
      <div class="tab-item waves-effect waves-block"
           v-for="(item , index) in this.items"
           :class="tabIndex===index?'active':''"
           @click="tabChange(index)" :key="index"
           v-waves.block>
        <span>{{item.name}}</span>
      </div>
      <div class="border" :style="borderStyle"></div>
    </div>
    <div class="tab-content">
      <transition :name="transitionName">
        <slot></slot>
      </transition>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'TabSlider',
    props: ['items', 'tabIndex'],
    data () {
      return {
        borderStyle: '',
        transitionName: 'slide-left'
      }
    },
    methods: {
      tabChange (index) {
        this.setBorderStyle(index)
        this.$emit('tabChange', index)
      },
      setBorderStyle (index) {
        const value = 100 * index
        const width = 100 / this.items.length
        this.borderStyle = 'width:' + width + '%;' +
          'transform:translateX(' + value + '%);'
      }
    },
    mounted () {
      this.setBorderStyle(this.tabIndex)
    },
    watch: {
      tabIndex: function (newValue, oldValue) {
        this.transitionName = newValue > oldValue ? 'slide-left' : 'slide-right'
      }
    }
  }
</script>

<style lang="less">
  @import "../assets/less/variable";

  .tab-slider {
    position: relative;
    .tab-bar {
      height: auto;
      display: flex;
      position: relative;
      text-align: center;
      background-color: @white;
      border-bottom: 1px solid @borderColor;
      font-size: 0.16rem;
      .tab-item {
        display: flex;
        flex: 1;
        &.active {
          color: @buttonColor2;
        }
        span {
          width: 100%;
          display: block;
          height: 0.45rem;
          line-height: 0.45rem;
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
    }
    .tab-content {
      position: relative;
    }
  }
</style>
