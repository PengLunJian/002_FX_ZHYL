<template>
  <div class="module JFTB">
    <div class="tab-bar clear">
      <div class="tab-item waves-effect waves-block" :class="{active:index === ins}" v-for="(item,index) in items"
           @click="handler(index)"
           :key="item.index"
           v-waves.block>
        {{item.text}}
      </div>
      <div class="border" :style="style"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'JFTB',
    data () {
      return {
        items: [
          {
            text: '待支付'
          },
          {
            text: '已支付'
          }
        ],
        ins: 0,
        style: '',
        active: ' active'
      }
    },
    methods: {
      handler: function (index) {
        this.ins = index
        this.$emit('change', index)
        const value = 100 * index
        this.style = 'transform:translateX(' + value + '%);'
      }
    },
    mounted () {
      this.handler(0)
    }
  }
</script>

<style lang="less">
  @import "../../assets/less/variable";

  .JFTB {
    height: auto;
    .tab-bar {
      height: auto;
      position: relative;
      border-bottom: 1px solid @borderColor;
      font-size: 0.14rem;
      text-align: center;
      .tab-item {
        width: 50%;
        float: left;
        height: 0.45rem;
        line-height: 0.45rem;
        &.active {
          color: @buttonColor;
        }
      }
      .border {
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 50%;
        transition: all 300ms ease-out;
        border-top: 3px solid @buttonColor;
      }
    }
  }
</style>
