<template>
  <div class="FX_ZHYL_JCBG">
    <error v-if="isFailure"></error>
    <div class="select" v-if="isSuccess&&data">
      <div class="module JCHZ">
        <div class="row-box-1">
          <label class="label">就诊人</label>
          <span class="span">{{data.realName}}</span>
          <i class="icon icon-next"></i>
        </div>
      </div>
      <div class="module JCLB">
        <div class="row-box-1">
          <time class="time">{{data.checkDate}}</time>
        </div>
        <div class="row-box-2">
          <div class="group" v-for="(item, index) in data.testReport" :key="index">
            <label class="label">{{item.itemName}}</label>
            <i class="icon icon-next"></i>
          </div>
          <div class="group off">
            <label class="label">B超</label>
            <i class="icon icon-next"></i>
          </div>
        </div>
      </div>
    </div>
    <no-data v-if="isSuccess&&!data"></no-data>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import Error from '../../components/Error';
  import NoData from '../../components/NoData';

  export default {
    name: 'JCBG',
    components: {Error, NoData},
    data() {
      return {
        queryId: 0
      };
    },
    created() {
      this.exeSelectReportList();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.REPORT_LIST.isLoading,
      isSuccess: state => state.REPORT_LIST.isSuccess,
      isFailure: state => state.REPORT_LIST.isFailure,
      data: state => state.REPORT_LIST.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JCBG {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.6rem;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .JCHZ {
      .row-box-1 {
        height: 0.45rem;
        line-height: 0.45rem;
        position: relative;
        padding: 0 0.45rem 0 0.15rem;
        .label {
        }
        .span {
          float: right;
          color: @fontColor;
        }
        .icon {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          width: 0.45rem;
          height: 100%;
          text-align: center;
          line-height: 0.45rem;
        }
      }
    }
    .JCLB {
      .row-box-1 {
        padding: 0 0.15rem;
        line-height: 0.45rem;
        border-bottom: 1px solid @borderColor;
        .time {
        }
      }
      .row-box-2 {
        .group {
          position: relative;
          padding: 0 0 0 0.15rem;
          font-size: 0;
          .label {
            padding-left: 0.08rem;
            line-height: 0.45rem;
            display: inline-block;
            vertical-align: middle;
            font-size: 0.13rem;
          }
          .icon {
            width: 0.45rem;
            height: 100%;
            line-height: 0.45rem;
            position: absolute;
            top: 0;
            right: 0;
            text-align: center;
            font-size: 0.13rem;
          }
          &:before {
            content: '';
            width: 0.08rem;
            height: 0.08rem;
            border-radius: 100%;
            display: inline-block;
            vertical-align: middle;
            background-color: @statusColor;
          }
          &:after {
            content: '';
            display: block;
            border-bottom: 1px solid @borderColor;
          }
          &.off {
            &:before {
              background-color: @offColor;
            }
          }
          &:last-child {
            &:after {
              border: none;
            }
          }
        }
      }
    }
  }
</style>
