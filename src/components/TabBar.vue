<template>
  <div class="tab-bar">
    <div class="tab-item waves-effect"
         :class="index===tabIndex?'active':''"
         v-for="(item,index) in tabs"
         :key="index"
         @click="tabChange(index)">{{item.name}}
    </div>
    <div class="border" :class="move?'move':''"
         :style="borderStyle"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'tab-bar',
    data() {
      return {
        move: false,
        borderStyle: ''
      };
    },
    props: ['tabs', 'tabIndex'],
    methods: {
      tabChange(index) {
        if (index !== this.tabIndex) {
          this.move = true;
          setTimeout(() => {
            this.move = false;
          }, 400);
        }
        const clientWidth = parseFloat(document.body.clientWidth);
        const length = this.tabs.length;
        const fontSize = clientWidth / 3.75;
        const tabItemWidth = clientWidth / length / fontSize * index;
        const translateX = 'transform:translateX(' + tabItemWidth + 'rem);';
        this.borderStyle += translateX;
        this.$emit('update:tabIndex', index);
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
    },
    watch: {
      tabIndex() {
        this.move = true;
        setTimeout(() => {
          this.move = false;
        }, 400);
        this.tabChange(this.tabIndex);
      }
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
    border-bottom: @border;
    font-size: 0.16rem;
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
      &.move {
        animation: borderMove 400ms ease-out;
      }
    }
  }

  @keyframes borderMove {
    0% {
      width: 0.9375rem;
    }
    50% {
      width: 1.5rem;
    }
    100% {
      width: 0.9375rem;
    }
  }
</style>
