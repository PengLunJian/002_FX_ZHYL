<template>
  <div class="module XXTS" :class="clazz">
    <div class="trigger" @click="showContent">
      <p class="info">缴费提醒</p>
      <i class="icon icon-next"></i>
    </div>
    <div class="content" :style="style">
      <div class="innerContent" ref="innerContent">
        <div class="row-box-1">
          <p class="desc">你有一笔挂号费代支付</p>
        </div>
        <div class="row-box-2">
          <div class="group">
            <label class="label">就诊姓名：</label>
            <span class="span">胡代宇</span>
          </div>
          <div class="group">
            <label class="label">就诊卡号：</label>
            <span class="span">36************99</span>
          </div>
          <div class="group">
            <label class="label">预约科室：</label>
            <span class="span">眼科</span>
          </div>
          <div class="group">
            <label class="label">就诊时间：</label>
            <span class="span">2018/09/08 13:00-16:00</span>
          </div>
          <div class="group">
            <label class="label">挂号费用：</label>
            <span class="span">20:00元</span>
          </div>
        </div>
        <div class="row-box-3">
          <button class="btn btn-confirm" v-waves.block>去缴费</button>
          <button class="btn btn-cancel" v-waves.block>取消挂号</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'XXTS',
    data () {
      return {
        clazz: 'hide',
        style: ''
      }
    },
    methods: {
      showContent: function () {
        if (this.clazz === 'hide') {
          const height = this.$refs.innerContent.offsetHeight
          this.style = 'height:' + height + 'px;'
          this.clazz = ''
        } else {
          this.style = 'height:' + 0 + 'px;'
          this.clazz = 'hide'
        }
      }
    },
    mounted () {}
  }
</script>

<style lang="less">
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
      .info {
        padding-left: 0.1rem;
        font-size: 0.14rem;
      }
      .icon {
        width: 0.4rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        line-height: 0.4rem;
        text-align: center;
        transform: rotate(90deg);
        transition: all 300ms ease;
      }
    }
    .content {
      overflow: hidden;
      transition: all 300ms ease;
      font-size: 0.14rem;
      .row-box-1 {
        padding-top: 0.1rem;
        line-height: 0.2rem;
        border-top: 1px solid @borderColor2;
        .desc {
          padding: 0 0.15rem;
        }
      }
      .row-box-2 {
        padding: 0.08rem 0.15rem 0.1rem;
        .group {
          line-height: 0.2rem;
          .label {

          }
          .span {
            color: @fontColor;
          }
        }
      }
      .row-box-3 {
        padding: 0.1rem 0.15rem;
        border-top: 1px solid @borderColor2;
        text-align: right;
        font-size: 0;
        .btn {
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
        height: 0;
      }
    }
  }
</style>
