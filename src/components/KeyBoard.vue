<template>
  <div class="keyboard"
       @touchmove="touchMove"
       :class="this.getIsShow?'':'hide'">
    <div class="keyboard-bg" @click="hideKeyBoard"></div>
    <div class="keyboard-content">
      <div class="keyboard-header"></div>
      <div class="keyboard-body">
        <ul class="keyboard-items">
          <li class="keyboard-item btn"
              v-for="(item,index) in keyCodes"
              :key="index" v-html="item.text"
              @click="clickNumber(item.keyCode)"></li>
        </ul>
      </div>
      <div class="keyboard-footer"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'KeyBoard',
    data() {
      return {
        value: '',
        keyCodes: [
          {
            keyCode: 1,
            text: '1'
          },
          {
            keyCode: 2,
            text: '2'
          },
          {
            keyCode: 3,
            text: '3'
          },
          {
            keyCode: 4,
            text: '4'
          },
          {
            keyCode: 5,
            text: '5'
          },
          {
            keyCode: 6,
            text: '6'
          },
          {
            keyCode: 7,
            text: '7'
          },
          {
            keyCode: 8,
            text: '8'
          },
          {
            keyCode: 9,
            text: '9'
          },
          {
            keyCode: 10,
            text: ''
          },
          {
            keyCode: 0,
            text: '0'
          },
          {
            keyCode: 11,
            text: '<p class="icon-delete"></p>'
          }
        ]
      };
    },
    props: ['isShow', 'initValue'],
    methods: {
      hideKeyBoard: function () {
        this.$emit('update:isShow', false);
      },
      touchMove: function (ev) {
        ev.preventDefault();
      },
      clickNumber: function (keyCode) {
        switch (keyCode) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 0:
            this.value += keyCode;
            break;
          case 10:
            break;
          case 11:
            const len = this.value.length;
            this.value = len ? this.value.substring(0, (len - 1)) : '';
            break;
        }
        this.$emit('writeNumber', this.value);
      }
    },
    computed: {
      getIsShow: function () {
        return this.isShow;
      }
    },
    watch: {
      isShow: function () {
        if (this.isShow) {
          this.value = this.initValue;
        }
      }
    }
  };
</script>

<style scoped lang="less">
  .keyboard {
    .keyboard-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9999;
      transition: all 300ms ease;
      background-color: rgba(0, 0, 0, .5);
    }
    .keyboard-content {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 10000;
      transition: all 300ms ease;
      .keyboard-header {
      }
      .keyboard-body {
        .keyboard-items {
          text-align: center;
          font-size: 0.22rem;
          background-color: #ffffff;
          box-shadow: 0 0 5px rgba(0, 0, 0, .05);
          .keyboard-item {
            float: left;
            width: 33.333%;
            height: 0.55rem;
            line-height: 0.55rem;
            &:nth-child(n+4) {
              border-top: 1px solid #e6e6e6;
            }
            &:not(:nth-of-type(3n)) {
              border-right: 1px solid #e6e6e6;
            }
            &:nth-child(10),
            &:nth-child(12) {
              background-color: #ececec;
            }
          }
          &:after {
            content: '';
            display: block;
            clear: both;
          }
        }
      }
      .keyboard-footer {
      }
    }
    &.hide {
      .keyboard-bg {
        opacity: 0;
        visibility: hidden;
      }
      .keyboard-content {
        visibility: hidden;
        transform: translateY(100%);
      }
    }
  }
</style>
