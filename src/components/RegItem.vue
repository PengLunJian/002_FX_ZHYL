<template>
  <div class="module GHMK">
    <div class="row-box-1">
      <h3 class="name">{{item.deptName}}</h3>
      <em class="em">{{item.isPay?'已支付':'待支付'}}</em>
    </div>
    <div class="row-box-2">
      <div class="group">
        <label class="label">挂号单号：</label>
        <span class="span">{{item.seeNo}}</span>
      </div>
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
        <label class="label">就诊医生：</label>
        <span class="span">{{item.doctorName}}</span>
      </div>
      <div class="group">
        <label class="label">就诊类别：</label>
        <span class="span">{{item.regType?'专家号':'普通号'}}</span>
      </div>
      <div class="group">
        <label class="label">就诊时间：</label>
        <span class="span">{{item.visistDate}}</span>
      </div>
      <div class="group">
        <label class="label">就诊患者：</label>
        <span class="span">{{item.idCardName}}</span>
      </div>
      <div class="group">
        <label class="label">挂号费用：</label>
        <span class="span">{{item.total}}元</span>
      </div>
      <div class="group">
        <label class="label">提交时间：</label>
        <span class="span">{{item.date}}</span>
      </div>
    </div>
    <div class="row-box-3">
      <button class="btn btn-confirm" @click="toPayBill" v-waves.block>去缴费</button>
      <button class="btn btn-cancel" @click="deleteSubscribe(item.clinicNo)" v-waves.block>取消挂号</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'RegItem',
    data() {
      return {};
    },
    props: ['item'],
    methods: {
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
          path: this.$routes.GHXQ.path
        });
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .GHMK {
    height: auto;
    position: relative;
    .row-box-1 {
      padding: 0 0.15rem;
      line-height: 0.45rem;
      border-bottom: @border;
      .name {
        display: inline-block;
        font-weight: normal;
        font-size: 0.15rem;
        line-height: 0.36rem;
      }
      .em {
        float: right;
        color: @buttonColor;
        font-size: 0.14rem;
      }
    }
    .row-box-2 {
      padding: 0.1rem 0.15rem;
      border-bottom: @border;
      .group {
        line-height: 0.2rem;
        margin-bottom: 0.04rem;
        font-size: 0.13rem;
        .label {

        }
        .span {
          color: @fontColor;
        }
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
