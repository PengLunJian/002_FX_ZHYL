<template>
  <div class="FX_ZHYL_JZRLB">
    <p class="desc">选择/添加需要就诊的人员</p>
    <swipeout>
      <div class="module" v-for="(item,index) in items" :key="index">
        <swipeout-item>
          <div slot="right-menu">
            <swipeout-button @click="defaultUnlock" type="warn">解绑</swipeout-button>
            <swipeout-button @click="defaultLock" type="primary">设为默认</swipeout-button>
          </div>
          <div slot="content">
            <suffer-item :item="item"></suffer-item>
          </div>
        </swipeout-item>
      </div>
    </swipeout>
    <button class="btn btn-add" @click="insertSuffer">
      <i class="btn-icon icon-add"></i>
      <span class="btn-text">添加就诊人</span>
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import SufferItem from '../../components/SufferItem';
  import {Swipeout, SwipeoutItem, SwipeoutButton} from 'vux';

  export default {
    components: {
      Swipeout,
      SufferItem,
      SwipeoutItem,
      SwipeoutButton
    },
    name: 'HZLB',
    data() {
      return {
        lock: '设为默认',
        unlock: '解绑',
        items: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
      };
    },
    methods: Controller,
    mounted() {
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JZRLB {
    padding: 0.15rem;
    background-color: @bgColor;
    .desc {
      color: @fontColor;
      font-size: 0.14rem;
      line-height: 0.15rem;
      margin-bottom: 0.15rem;
      letter-spacing: 1px;
    }
    .btn-add {
      width: 100%;
      display: block;
      background-color: @white;
      border-radius: @borderRadius;
      border: 1px solid @borderColor3;
      color: @buttonColor2;
      font-size: 0;
      .btn-icon {
        display: inline-block;
        vertical-align: middle;
        font-size: 0.18rem;
        margin-right: 0.1rem;
      }
      .btn-text {
        line-height: 0.6rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.18rem;
      }
    }
  }
</style>
