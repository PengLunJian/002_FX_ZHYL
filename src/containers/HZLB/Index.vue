<template>
  <div class="FX_ZHYL_JZRLB">
    <p class="desc">选择/添加需要就诊的人员</p>
    <div class="module JZRLB">
      <div class="row-box-1">
        <span class="name">胡代宇</span>
        <span class="tag">自费</span>
        <div class="right">
          <label class="label">电子就诊卡</label>
          <span class="card">卡号：36************99</span>
        </div>
      </div>
      <div class="row-box-2">
        <label class="label">芜湖市第二人民医院</label>
        <span class="span">当前就诊人</span>
      </div>
    </div>
    <button class="btn btn-add" @click="insertSuffer">
      <i class="btn-icon icon-add"></i>
      <span class="btn-text">添加就诊人</span>
    </button>
  </div>
</template>

<script type="text/ecmascript-6">
  import Controller from './Controller';
  export default{
    name: 'JZRLB',
    data () {
      return {};
    },
    methods: Controller
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JZRLB {
    padding: 0.15rem;
    background-color: @bgColor;
  }

  .desc {
    color: @fontColor;
    font-size: 0.14rem;
    line-height: 0.15rem;
    margin-bottom: 0.15rem;
    letter-spacing: 1px;
  }

  .JZRLB {
    height: auto;
    box-shadow: none;
    padding: 0.1rem;
    border-radius: @borderRadius;
    background: linear-gradient(to right, #00a9f7, #005ceb);
    color: @white;
    .row-box-1 {
      padding-bottom: 0.1rem;
      border-bottom: 1px solid @white;
      font-size: 0;
      &:after {
        content: '';
        display: block;
        clear: both;
      }
      .name {
        height: 0.3rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.2rem;
        line-height: 0.3rem;
        margin-right: 0.1rem;
      }
      .tag {
        height: 0.18rem;
        padding: 0 0.05rem;
        font-size: 0.12rem;
        line-height: 0.18rem;
        display: inline-block;
        vertical-align: middle;
        border-radius: 0.03rem;
        background-color: rgba(255, 255, 255, .15);
      }
      .right {
        float: right;
        height: 0.3rem;
        font-size: 0.11rem;
        line-height: 0.15rem;
        .label {
          display: block;
        }
        .card {
          display: block;
        }
      }
    }
    .row-box-2 {
      padding-top: 0.1rem;
      font-size: 0;
      .label {
        display: inline-block;
        line-height: 0.2rem;
        font-size: 0.12rem;
      }
      .span {
        float: right;
        line-height: 0.2rem;
        font-size: 0.12rem;
      }
    }
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
</style>
