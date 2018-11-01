<template>
  <div class="tab-bar">
    <div class="tab-item waves-effect"
         :class="index===tabIndex?'active':''"
         v-for="(item,index) in tabs"
         :key="index"
         @click="tabChange(index)">{{item.name}}
    </div>
    <div class="border" :style="borderStyle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tab-bar',
    data() {
      return {
        tabIndex: 0,
        borderStyle: ''
      };
    },
    props: ['tabs'],
    methods: {
      tabChange(index) {
        const clientWidth = parseFloat(document.body.clientWidth);
        const length = this.tabs.length;
        const fontSize = clientWidth / 3.75;
        const tabItemWidth = clientWidth / length / fontSize * index;
        const translateX = 'transform:translateX(' + tabItemWidth + 'rem);';
        this.borderStyle += translateX;
        this.tabIndex = index;
      },
      setBorderStyle() {
        const clientWidth = parseFloat(document.body.clientWidth);
        const length = this.tabs.length;
        const fontSize = clientWidth / 3.75;
        const tabItemWidth = clientWidth / length;
        const borderWidth = tabItemWidth / 2;
        const width = 'width:' + borderWidth / fontSize + 'rem;';
        const left = 'left:' + (tabItemWidth - borderWidth) / 2 / fontSize + 'rem;';
        this.borderStyle = width + left;
      }
    },
    mounted() {
      this.setBorderStyle();
    }
  };
</script>

<style scoped lang="less">
  @import '../assets/less/variable';

  .tab-bar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    text-align: center;
    background-color: @white;
    box-shadow: @boxShadow;
    border-bottom: 1px solid @borderColor;
    font-size: 0.14rem;
    .tab-item {
      flex: 1;
      display: block;
      text-align: center;
      line-height: 0.45rem;
      &.active {
        color: @activeBorder;
      }
    }
    .border {
      position: absolute;
      left: 0;
      bottom: 0;
      border-top: 0.03rem solid @activeBorder;
      transition: transform 400ms ease-out;
    }
  }
</style>
