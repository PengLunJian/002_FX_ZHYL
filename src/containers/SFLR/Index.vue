<template>
  <div class="FX_ZHYL_JZRSFZ">
    <div class="form-group">
      <label class="form-label" for="name">姓名</label>
      <input class="form-input" id="name" type="text"
             v-model="name" placeholder="请输入"/>
    </div>
    <div class="form-group">
      <label class="form-label" for="idNumber">身份证号码</label>
      <input class="form-input" id="idNumber" type="text"
             v-model="idNumber" placeholder="请输入"/>
    </div>
    <div class="form-group" @click="showMenus('性别')">
      <label class="form-label">性别</label>
      <span class="form-select">{{gender || "请选择"}}</span>
    </div>
    <div class="form-group" @click="showMenus('民族')">
      <label class="form-label">民族</label>
      <span class="form-select">{{nation || "请选择"}}</span>
    </div>
    <div class="form-group">
      <button class="btn btn-next" :class="status"
              @click="handlerBtnClick">下一步
      </button>
    </div>
    <popup-picker :data="popupPicker.data" :popup-title="popupPicker.popupTitle"
                  :show.sync="popupPicker.show" @on-change="handlerChange"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {PopupPicker} from 'vux';
  import Controllers from './Controller';

  export default {
    components: {
      PopupPicker
    },
    name: 'JZRSFZ',
    data() {
      return {
        name: '',
        idNumber: '',
        gender: '',
        nation: '',
        status: 'disabled',
        popupPicker: {
          show: false,
          data: [['']],
          value: null,
          popupTitle: '请选择'
        }
      };
    },
    methods: Controllers,
    watch: {
      name() {
        this.checkNotEmpty();
      },
      idNumber() {
        this.checkNotEmpty();
      },
      gender() {
        this.checkNotEmpty();
      },
      nation() {
        this.checkNotEmpty();
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_JZRSFZ {
    background-color: @bgColor;
    .form-group {
      position: relative;
      padding-left: 0.15rem;
      background-color: @white;
      .form-label {
        line-height: 0.45rem;
        font-size: 0.16rem;
      }
      .form-input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 0.45rem;
        text-align: right;
        padding-right: 0.15rem;
        background-color: transparent;
        font-size: 0.16rem;
        color: @fontColor;
      }
      .form-select {
        float: right;
        line-height: 0.45rem;
        padding-right: 0.15rem;
        font-size: 0.16rem;
        color: @fontColor;
      }
      .btn-next {
        width: 100%;
        display: block;
        line-height: 0.47rem;
        transition: all 300ms ease;
        border-radius: @borderRadius;
        border: 1px solid @buttonColor2;
        background-color: @buttonColor2;
        font-size: 0.16rem;
        color: @white;
      }
      &:after {
        content: '';
        display: block;
        border-top: 1px solid @borderColor;
      }
      &:nth-child(5) {
        padding: 0.35rem 0.2rem 0;
        background-color: transparent;
      }
    }
    .vux-cell-box {
      &:not(:first-child):before {
        border: none;
      }
    }
  }
</style>
