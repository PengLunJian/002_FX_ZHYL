<template>
  <div class="FX_ZHYL_JZRLB">
    <div class="header">
      <p class="title">选择/添加需要就诊的人员</p>
    </div>
    <div class="body">
      <mescroll-vue ref="mescroll" :down="down" :up="up" @init="init">
        <swipeout>
          <div class="module" v-for="(item,index) in LIST" :key="index">
            <swipeout-item>
              <div slot="right-menu">
                <swipeout-button @click.native="ajaxRequestDeleteVisitor(item.patientCardNo)"
                                 background-color="#e7463f">解绑
                </swipeout-button>
                <swipeout-button @click.native="ajaxRequestUpdateVisitor(item.patientCardNo)"
                                 background-color="#ed7f2d">设为默认
                </swipeout-button>
              </div>
              <div slot="content">
                <suffer-item :item="item"></suffer-item>
              </div>
            </swipeout-item>
          </div>
        </swipeout>
      </mescroll-vue>
    </div>
    <div class="footer">
      <button class="btn btn-add" @click="insertSuffer">
        <i class="btn-icon icon-add"></i>
        <span class="btn-text">添加就诊人</span>
      </button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  import SufferItem from '../../components/SufferItem';
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import {Swipeout, SwipeoutItem, SwipeoutButton} from 'vux';

  export default {
    components: {
      Swipeout,
      SufferItem,
      SwipeoutItem,
      SwipeoutButton,
      MescrollVue
    },
    name: 'HZLB',
    data() {
      return {
        mescroll: null,
        up: {
          auto: false,
          isBounce: false,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有更多数据</p>'
        },
        down: {
          auto: false,
          offset: 50,
          mustToTop: true,
          outOffsetRate: 0.3,
          callback: this.refresh,
          autoShowLoading: true
        }
      };
    },
    created() {
      this.$vux.loading.show({
        text: '加载中...'
      });
    },
    methods: Controller,
    mounted() {
      this.pageCode = 1;
      this.ajaxRequestSelectVisitor();
    },
    computed: {
      LIST() {
        return this.$store.state.VISITOR_LIST.LIST;
      },
      CARD_NO() {
        return this.$store.state.DEFAULT_CARD.CARD_NO;
      }
    },
    watch: {
      $route(to, from) {
        if (from.name === 'HZLB') {
          this.mescroll.setBounce(true);
        }
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JZRLB {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: @bgColor;
    padding: 0.45rem 0.15rem 0.7rem;
    .header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 0.15rem;
    }
    .body {
      height: 100%;
      .module {
        height: 0.91rem;
        transition: all 300ms ease;
      }
    }
    .footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding: 0.1rem 0.15rem;
    }
    .title {
      color: @fontColor;
      font-size: 0.14rem;
      line-height: 0.45rem;
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
        height: 0.48rem;
        line-height: 0.48rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.18rem;
      }
    }
  }
</style>
