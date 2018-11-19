<template>
  <div class="FX_ZHYL_GRXX">
    <div class="module JBXX">
      <div class="row-box-1">
        <h3 class="small-title">基本信息</h3>
      </div>
      <div class="row-box-2">
        <div class="group">
          <label class="label">姓名</label>
          <span class="span">{{data.name}}</span>
        </div>
        <div class="group">
          <label class="label">身份证号</label>
          <span class="span">342523199007244618</span>
        </div>
        <div class="group">
          <label class="label">就诊卡</label>
          <span class="span">{{data.patientCardNo}}</span>
        </div>
        <div class="group">
          <label class="label">手机号</label>
          <span class="span">18130278679</span>
        </div>
      </div>
    </div>
    <div class="module ZYXX">
      <div class="row-box-1">
        <h3 class="small-title">紧急联系人信息</h3>
      </div>
      <div class="row-box-2">
        <div class="group">
          <label class="label">关系</label>
          <span class="span">妻子</span>
        </div>
        <div class="group">
          <label class="label">手机号</label>
          <span class="span">18130278679</span>
        </div>
      </div>
      <div class="row-box-3">
        <button class="btn btn-unbind disabled">解绑该就诊卡</button>
        <!--<p class="message">就诊卡在2019年03月04日后可解绑</p>-->
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';

  export default {
    name: 'GRXX',
    data() {
      return {};
    },
    created() {
      if (this.isLoading) return;
      this.exeSelectDefaultCard();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.DEFAULT_CARD.isLoading,
      isSuccess: state => state.DEFAULT_CARD.isSuccess,
      isFailure: state => state.DEFAULT_CARD.isFailure,
      data: state => state.DEFAULT_CARD.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_GRXX {
    min-height: 100vh;
    background-color: @bgColor;
    .module {
      margin: 0 !important;
    }
    .JBXX {
      .row-box-1 {
        padding: 0 0.15rem;
        line-height: 0.35rem;
        background-color: @bgColor;
        .small-title {
          font-weight: normal;
          font-size: 0.13rem;
          color: @fontColor;
        }
      }
      .row-box-2 {
        .group {
          line-height: 0.45rem;
          padding: 0 0 0 0.15rem;
          font-size: 0.14rem;
          .label {

          }
          .span {
            float: right;
            padding-right: 0.15rem;
            color: @fontColor;
          }
          &:after {
            content: '';
            display: block;
            border-top: 1px solid @borderColor;
          }
          &:last-child {
            &:after {
              border: none;
            }
          }
        }
      }
    }
    .ZYXX {
      margin: 0;
      box-shadow: none;
      .row-box-1 {
        line-height: 0.35rem;
        background-color: @bgColor;
        .group {
          padding: 0 0.15rem;
          line-height: 0.45rem;
          background-color: @white;
          .label {
          }
          .span {
            float: right;
          }
        }
        .small-title {
          padding: 0 0.15rem;
          font-weight: normal;
          font-size: 0.13rem;
          color: @fontColor;
        }
      }
      .row-box-2 {
        .group {
          position: relative;
          line-height: 0.45rem;
          padding: 0 0 0 0.15rem;
          font-size: 0.14rem;
          .label {

          }
          .span {
            float: right;
            padding-right: 0.15rem;
            color: @fontColor;
          }
          .icon {
            display: block;
            width: 0.45rem;
            height: 100%;
            position: absolute;
            top: 0;
            right: 0;
            text-align: center;
            line-height: 0.45rem;
          }
          &:after {
            content: '';
            display: block;
            border-top: 1px solid @borderColor;
          }
          &:last-child {
            &:after {
              border: none;
            }
          }
        }
      }
      .row-box-3 {
        padding: 0.25rem 0.2rem 0;
        background-color: @bgColor;
        .btn-unbind {
          width: 100%;
          color: @white;
          display: block;
          overflow: hidden;
          font-size: 0.16rem;
          line-height: 0.47rem;
          margin-bottom: 0.25rem;
          background-color: @buttonColor2;
          border-radius: @borderRadius;
        }
        .message {
          text-align: center;
          font-size: 0.14rem;
          color: @fontColor;
        }
      }
    }
  }
</style>
