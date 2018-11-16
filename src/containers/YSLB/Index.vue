<template>
  <div class="FX_ZHYL_YSLB">
    <div class="module YYSJ">
      <ul class="date-filter">
        <li class="filter-item" :class="index===status?' active':''"
            v-for="(item,index) in filters" :key="index" @click="handleFilter(index)">
          <span class="filter-number">{{item.number}}</span>
          <span class="filter-text">{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div class="module ZZYS">
      <no-data v-if="isLoading&&!isFailure&&!data.length"></no-data>
      <error v-if="isFailure&&!data.length" @refresh="exeSelectDoctorList"></error>
      <doctor-item v-for="(item,index) in data" :key="index" :item="item"></doctor-item>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import DoctorItem from '../../components/DoctorItem';
  import Error from '../../components/Error';
  import NoData from '../../components/NoData';

  export default {
    components: {
      DoctorItem,
      Error,
      NoData
    },
    name: 'YSLB',
    data() {
      return {
        date: 0,
        status: 0,
        pageCode: 1,
        filters: [
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          },
          {
            number: '09 - 05',
            text: '周三'
          }
        ]
      };
    },
    created() {
      if (this.isLoading) return;
      this.exeSelectDoctorList();
    },
    methods: Controller,
    computed: mapState({
      isLoading: state => state.DOCTOR_LIST.isLoading,
      isSuccess: state => state.DOCTOR_LIST.isSuccess,
      isFailure: state => state.DOCTOR_LIST.isFailure,
      data: state => state.DOCTOR_LIST.data
    })
  };
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';

  .FX_ZHYL_YSLB {
    height: 100vh;
    padding-top: 0.6rem;
    background-color: @bgColor;
    .module {
      background-color: transparent;
    }
    .YYSJ {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      overflow-y: auto;
      box-shadow: @boxShadow;
      background-color: @white;
      -webkit-overflow-scrolling: touch;
      .date-filter {
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
        font-size: 0;
      }
      .filter-item {
        width: 0.7rem;
        padding: 0.08rem 0;
        position: relative;
        display: inline-block;
        text-align: center;
        font-size: 0.12rem;
        span {
          display: block;
          height: 0.15rem;
          line-height: 0.15rem;
          &.filter-number {
            margin-bottom: 0.04rem;
          }
        }
        &:before {
          content: '';
          display: block;
          width: 0;
          height: 0.3rem;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -0.15rem;
          border-left: 1px solid #d8d8d8;
        }
        &:last-child {
          &:before {
            border: none;
          }
        }
        &.active {
          color: #0061e8;
          &:after {
            content: '';
            display: block;
            width: 0.4rem;
            position: absolute;
            left: 50%;
            bottom: 0;
            margin-left: -0.2rem;
            border-top: 2px solid #0061e8;
          }
        }
      }
    }
    .ZZYS {
      height: 100%;
      position: relative;
      .doctorList {
        padding-top: 0.1rem;
      }
    }
  }
</style>
