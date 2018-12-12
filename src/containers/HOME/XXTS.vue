<template>
  <div class="module XXTS" :class="clazz">
    <div class="trigger" @click="showMessage();">
      <h3 class="message">消息提醒</h3>
      <i class="icon icon-next"></i>
    </div>
    <div class="content" :style="style">
      <div class="context" ref="inner">
        <loading v-if="!isLoading"></loading>
        <no-data v-if="isSuccess&&!data.length"></no-data>
        <error v-if="isFailure" @refresh="exeSelectMessageList"></error>
        <div v-if="isSuccess&&data.length">
          <div class="row-box-1">
            <h4>{{data[0].msgTitle}}</h4>
          </div>
          <div class="row-box-2" v-html="data[0].msgContent"></div>
          <div class="row-box-3">
            <button class="btn btn-confirm" @click="showDetail(data[0].msgUrl)">查看详情</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import Error from '../../components/Error';
  import NoData from '../../components/NoData';
  import Loading from '../../components/Loading';

  export default {
    components: {
      NoData,
      Error,
      Loading
    },
    name: 'XXTS',
    data() {
      return {
        style: '',
        height: 0,
        clazz: 'hide'
      };
    },
    created() {
      this.SELECT_MESSAGE_LIST_REQUEST();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.MESSAGE_LIST.isLoading,
      isSuccess: state => state.MESSAGE_LIST.isSuccess,
      isFailure: state => state.MESSAGE_LIST.isFailure,
      data: state => state.MESSAGE_LIST.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .XXTS {
    .trigger {
      position: relative;
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0 0.4rem;
      overflow: hidden;
      background-size: 0.2rem auto;
      background-repeat: no-repeat;
      background-position: 0.15rem center;
      background-image: url('../../assets/images/news_icon@2x.png');
      .message {
        padding-left: 0.1rem;
        font-size: 0.14rem;
        color: #333333;
      }
      .icon {
        width: 0.4rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        display: inline-block;
        vertical-align: middle;
        line-height: 0.4rem;
        text-align: center;
        transform: rotate(90deg);
        transition: all 300ms ease;
        font-size: 0.14rem;
      }
    }
    .content {
      overflow: hidden;
      transition: all 300ms ease;
      font-size: 0.14rem;
      .context {
        height: 2rem;
        position: relative;
        border-top: 1px solid @borderColor2;
      }
      .row-box-1 {
        padding: 0.1rem 0.15rem 0;
        h4 {
          font-size: 0.14rem;
        }
      }
      .row-box-2 {
        padding: 0.1rem 0.15rem;
        line-height: 0.2rem;
        font-size: 0.14rem;
      }
      .row-box-3 {
        padding: 0.1rem 0.15rem;
        border-top: 1px solid @borderColor2;
        text-align: right;
        font-size: 0;
        .btn {
          height: 0.32rem;
          padding: 0 0.15rem;
          line-height: 0.3rem;
          margin-left: 0.15rem;
          display: inline-block;
          border: 1px solid #979797;
          border-radius: @borderRadius;
          font-size: 0.14rem;
          &.btn-confirm {
            border-color: @buttonColor2;
            color: @buttonColor2;
          }
        }
      }
    }
    &.hide {
      .icon {
        transform: rotate(-90deg);
      }
      .content {
        height: 0 !important;
      }
    }
  }
</style>
