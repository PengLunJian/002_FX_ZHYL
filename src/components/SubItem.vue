<template>
  <div class="module YYMK">
    <div class="row-box-1">
      <div class="group">
        <img src="../assets/images/doctor@2x.png"/>
        <label class="label">{{item.doctorName}}</label>
        <span class="span">({{item.doctorTitle}})</span>
        <em class="em">{{item.isPay?'已支付':'待支付'}}</em>
      </div>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">就诊人：</label>
        <span class="span">{{item.idCardName}}</span>
      </div>
      <div class="group">
        <label class="label">就诊人卡号：</label>
        <span class="span">{{item.idCardNo}}</span>
      </div>
      <div class="group">
        <label class="label">就诊科室：</label>
        <span class="span">{{item.deptName}}</span>
      </div>
      <div class="group">
        <label class="label">就诊医院：</label>
        <span class="span">{{item.hospitalName}}</span>
      </div>
      <div class="group">
        <label class="label">就诊类别：</label>
        <span class="span">{{item.regType === 1 ? '专家号' : '普通号'}}</span>
      </div>
      <div class="group">
        <label class="label">就诊时间：</label>
        <span class="span">{{item.visistDate}} {{item.visitingTime}}</span>
      </div>
      <div class="group">
        <label class="label">就诊患者：</label>
        <span class="span">{{item.idCardName}}</span>
      </div>
      <div class="group">
        <label class="label">门诊费用：</label>
        <span class="span">{{item.total}}元(不含挂号费)</span>
      </div>
      <div class="group">
        <label class="label">提交时间：</label>
        <span class="span">{{item.date}}</span>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-doneregister" v-if="item.appimentStatus==='0'" v-waves.block>已取消</button>
      <button class="btn btn-doregister" @click="toDoRegister(item.subscribeId)" v-if="item.appimentStatus==='1'" v-waves.block>取号</button>
      <button class="btn btn-doneregister" v-if="item.appimentStatus==='2'" v-waves.block>已取号</button>
      <button class="btn btn-confirm" @click="toPayBill" v-waves.block>去缴费</button>
      <button class="btn btn-cancel" @click="deleteSubscribe(item.subscribeId)" v-waves.block>取消预约</button>
      <!--<button @click="showDetails" class="btn btn-detail">查看详情</button>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions} from 'vuex';
  export default {
    name: 'SubItem',
    props: ['item'],
    data() {
      return {};
    },
    methods: {
      toDoRegister: function(id) {
        this.$emit('doregister', id);
      },
      toPayBill: function() {
        this.$router.push({
          path: this.$routes.JFJL.path
        });
      },
      deleteSubscribe: function(id) {
        this.$emit('delete', id);
      },
      showDetails: function () {
        this.$router.push({
          path: this.$routes.YYXQ.path
        });
      },
      ...mapActions([
        'exeDeleteSubscribeList'
      ])
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .YYMK {
    height: auto;
    position: relative;
    .label {
      font-size: 0.13rem;
    }
    .span {
      color: @fontColor;
      font-size: 0.13rem;
    }
    .em {
      float: right;
      padding-right: 0.15rem;
      color: @buttonColor;
      font-size: 0.14rem;
    }
    .row-box-1 {
      height: auto;
      line-height: 0.45rem;
      padding-left: 0.15rem;
      font-size: 0;
      img {
        width: 0.35rem;
        height: 0.35rem;
        margin-right: 0.15rem;
        display: inline-block;
        vertical-align: middle;
      }
      .label {
        padding: 0;
        margin-right: 0.05rem;
        display: inline-block;
        vertical-align: middle;
      }
      .span {
        font-size: 0.12rem;
        display: inline-block;
        vertical-align: middle;
      }
      &:after {
        content: '';
        display: block;
        border-bottom: 1px solid @borderColor;
      }
    }
    .row-box-2 {
      padding: 0.1rem 0.15rem;
      border-bottom: 1px solid @borderColor;
      .group {
        line-height: 0.2rem;
        margin-bottom: 0.04rem;
        &:last-child {
          margin: 0;
        }
      }
    }
    .row-box-3 {
      font-size: 0;
      text-align: right;
      padding: 0.1rem 0.15rem;
      .btn {
        line-height: 0.3rem;
        padding: 0 0.15rem;
        display: inline-block;
        vertical-align: middle;
        margin-left: 0.15rem;
        border-radius: @borderRadius;
        font-size: 0.13rem;
        &.btn-doregister {
          color: @buttonColor;
          border: 1px solid @buttonColor;
          float: left;
          margin-left: 0;
        }
        &.btn-doneregister {
          color: @fontColor;
          border: 1px solid @borderColor;
          float: left;
          margin-left: 0;
        }
        &.btn-confirm {
          color: @buttonColor;
          border: 1px solid @buttonColor;
        }
        &.btn-cancel {
          color: @fontColor;
          border: 1px solid @borderColor;
        }
      }
    }
    &.slot-out {
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        color: @white;
        font-size: 0.3rem;
        text-align: center;
        line-height: 1.9rem;
        background-size: 1.2rem auto;
        background-repeat: no-repeat;
        background-position: 2.4rem 0.8rem;
        background-image: url('../assets/images/slot_out@2x.png');
      }
    }
  }
</style>
