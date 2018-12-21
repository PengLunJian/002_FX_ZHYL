<template>
  <div class="FX_ZHYL_SFLR">
    <div class="form-group">
      <label class="form-label" for="name">姓名</label>
      <input class="form-input" id="name" type="text"
             v-model="name" placeholder="请输入"/>
    </div>
    <div class="form-group">
      <label class="form-label" for="number">身份证号码</label>
      <input class="form-input" id="number" type="text"
             v-model="number" placeholder="请输入"/>
    </div>
    <div class="form-group" @click="showMenus('性别')">
      <label class="form-label">性别</label>
      <span class="form-select">{{gender}}</span>
    </div>
    <div class="form-group" @click="showMenus('民族')">
      <label class="form-label">民族</label>
      <span class="form-select">{{nation}}</span>
    </div>
    <div class="form-group">
      <label class="form-label" for="phone">手机号码</label>
      <input class="form-input" id="phone" type="tel"
             v-model="phone" placeholder="请输入"/>
    </div>
    <div class="form-group" @click="showMenus('关系')">
      <label class="form-label">与就诊人关系</label>
      <span class="form-select">{{relation}}</span>
    </div>
    <div class="form-group">
      <button class="btn btn-confirm" :class="status"
              @click="exeInsertVisitorList">绑卡
      </button>
    </div>
    <popup-picker :data="popupPicker.data" :popup-title="popupPicker.popupTitle"
                  :show.sync="popupPicker.show" @on-change="handlerChange"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import {PopupPicker} from 'vux';
  import Controller from './Controller';

  export default {
    components: {
      PopupPicker
    },
    name: 'SFLR',
    data() {
      return {
        name: '',
        phone: '',
        number: '',
        gender: '请选择',
        nation: '请选择',
        relation: '请选择',
        status: 'disabled',
        popupPicker: {
          show: false,
          data: [['']],
          value: null,
          popupTitle: '请选择'
        }
      };
    },
    methods: Controller,
    watch: {
      name() {
        this.checkNotEmpty();
      },
      number() {
        this.checkNotEmpty();
      },
      phone() {
        this.checkNotEmpty();
      },
      gender() {
        this.checkNotEmpty();
      },
      nation() {
        this.checkNotEmpty();
      },
      relation() {
        this.checkNotEmpty();
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_SFLR {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-bottom: 0.5rem;
    -webkit-overflow-scrolling: touch;
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
      .btn-confirm {
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
        border-top: @border;
      }
      &:nth-last-child(2) {
        padding: 0.35rem 0.2rem 0;
        background-color: transparent;
        &:after {
          border: none !important;
        }
      }
      &:nth-last-child(3) {
        &:after {
          border: none !important;
        }
      }
    }
  }
</style>
