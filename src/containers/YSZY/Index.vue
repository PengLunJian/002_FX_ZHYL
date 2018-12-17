<template>
  <div class="FX_ZHYL_YSZY">
    <error v-if="isFailure" @refresh="exeSelectDoctorDetail"></error>
    <no-data v-if="isSuccess&&!data"></no-data>
    <div class="content" v-if="isSuccess&&data">
      <div class="module YSXX">
        <div class="col-box-1">
          <img :src="data.doctImage||require('../../assets/images/doctor@2x.png')"/>
        </div>
        <div class="col-box-2">
          <div class="name">{{data.doctName}}&nbsp;<span class="span">(在职医生)</span></div>
          <div class="group ellipsis">
            <label class="label">职称：</label>
            <span class="span">{{data.reglevelName}}</span>
          </div>
          <div class="group ellipsis">
            <label class="label">科室：</label>
            <span class="span">{{data.deptName}}</span>
          </div>
          <div class="group ellipsis">
            <label class="label">擅长：</label>
            <span class="span">{{data.goodDisease}}</span>
          </div>
        </div>
      </div>
      <div class="module PBXX">
        <h3 class="title"><span>排班信息</span></h3>
        <div class="table">
          <div class="table-header">
            <span>&nbsp;</span>
            <span v-for="(item,index) in days"
                  :class="item.clazz" :key="index">{{item.text}}</span>
          </div>
          <div class="table-body">
            <table border="0" cellpadding="0" cellspacing="0" :style="isPre?'width:100%;':''">
              <thead>
              <tr>
                <th v-for="(item,index) in data.schedulWeek" :key="index" :colspan="isPre?2:1">
                  <span>{{item.seeDate}}</span><span>{{item.week}}</span>
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(day,i) in days" :key="i">
                <td v-if="isPre">
                  <span>{{data.schedulWeek[0].schedulDay[i].timeSolt}}</span>
                </td>
                <td v-for="(item,index) in data.schedulWeek" :key="index">
                  <span :class="item.schedulDay[i].isRegister?'on':'off'"
                        @click="handlerClick(item,i)">
                  {{item.schedulDay[i].isRegister?(isPre?'挂号':'预约'):(isPre?'已满':'约满')}}
                  </span>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="table-footer">
            <p>排班信息以医院实际发布为准</p>
          </div>
        </div>
      </div>
      <div class="module YSJJ">
        <h3 class="title"><span>医生简介</span></h3>
        <p class="content">{{data.doctIntroduction}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import Error from '../../components/Error';
  import NoData from '../../components/NoData';

  export default {
    components: {
      Error,
      NoData
    },
    name: 'YSZY',
    data() {
      return {
        days: [
          {text: '上午', clazz: 'am'},
          {text: '下午', clazz: 'pm'}
        ],
        isPre: this.$route.query.isPre === '0'
      };
    },
    created() {
      this.exeSelectDoctorDetail();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.DOCTOR_DETAIL.isLoading,
      isSuccess: state => state.DOCTOR_DETAIL.isSuccess,
      isFailure: state => state.DOCTOR_DETAIL.isFailure,
      data: state => state.DOCTOR_DETAIL.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FX_ZHYL_YSZY {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: @bgColor;
    .YSXX {
      height: auto;
      overflow: hidden;
      position: relative;
      padding: 0.15rem 0.9rem;
      font-size: 0.12rem;
      .col-box-1 {
        width: 0.9rem;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        padding-left: 0.15rem;
        font-size: 0;
        img {
          width: 0.65rem;
          height: 0.8rem;
          vertical-align: middle;
          background-color: #def9f4;
          border-radius: @borderRadius;
        }
        &:before {
          content: '';
          height: 100%;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .col-box-2 {
        .name {
          margin-bottom: 0.04rem;
          font-size: 0.14rem;
        }
        .group {
          line-height: 0.2rem;
        }
        .span {
          color: #808080;
          font-size: 0.12rem;
        }
      }
      .col-box-3 {
        width: 0.9rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
        padding-right: 0.15rem;
        font-size: 0;
        .btn-collection {
          line-height: 0.3rem;
          padding: 0 0.1rem;
          display: inline-block;
          vertical-align: middle;
          border: 1px solid #589af0;
          border-radius: 0.03rem;
          font-size: 0.13rem;
          color: #589af0;
        }
        &:before {
          content: '';
          height: 100%;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
    .PBXX {
      min-height: 2.2rem;
      .table {
        position: relative;
        padding-left: 0.5rem;
        .table-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 0.5rem;
          height: 100%;
          span {
            display: block;
            height: 0.5rem;
            line-height: 0.5rem;
            text-align: center;
            font-size: 0.16rem;
            border-right: 1px solid @tableBorder;
            border-bottom: 1px solid @tableBorder;
          }
        }
        .table-body {
          position: relative;
          overflow-x: auto;
          table {
            width: 5rem;
            text-align: center;
            color: #808080;
            &.clazz {
              width: 100% !important;
            }
            th, td {
              height: 0.5rem;
              border-right: 1px solid @tableBorder;
              border-bottom: 1px solid @tableBorder;
              &:last-child {
                border-right: none;
              }
              span {
                display: block;
              }
            }
            thead {
              th {
                position: relative;
                &:nth-child(n+2):not(:last-child) {
                  border-right: none;
                  &:after {
                    content: '';
                    display: block;
                    height: 0.3rem;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    margin-top: -0.15rem;
                    border-left: 1px solid @tableBorder;
                  }
                }
              }
            }
            tbody {
              td {
                span {
                  height: 0.3rem;
                  line-height: 0.3rem;
                  border-radius: @borderRadius;
                  display: inline-block;
                  &.on {
                    color: #2a7eee;
                    background-color: #dbecff;
                  }
                  &.off {
                    color: @white;
                    background-color: #cccccc;
                  }
                }
                span {
                  padding: 0 0.1rem;
                }
              }
            }
          }
        }
        .table-footer {
          p {
            text-align: right;
            padding-right: 0.15rem;
            border-bottom: none;
            line-height: 0.5rem;
            font-size: 0.14rem;
          }
        }
      }
    }
    .YSJJ {
      min-height: 2.2rem;
      .content {
        padding: 0.15rem;
        text-align: justify;
        line-height: 0.2rem;
      }
    }
  }
</style>
