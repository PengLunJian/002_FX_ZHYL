<template>
  <div class="FX_ZHYL_YSLB">
    <div class="module YYSJ">
      <ul class="date-filter">
        <li class="filter-item" :class="index===0?' active':''"
            v-for="(item,index) in filters"
            :key="index">
          <span class="filter-number">{{item.number}}</span>
          <span class="filter-text">{{item.text}}</span>
        </li>
      </ul>
    </div>
    <div class="module ZZYS">
      <no-data v-if="isLoading&&!isFailure&&!data.length"></no-data>
      <error v-if="isFailure&&!data.length" @refresh="exeSelectSubscribeList"></error>
      <mescroll-vue v-if="data.length" ref="mescroll" :down="down" :up="up" @init="init">
        <doctor-item v-for="(item,index) in items"
                     :key="index"
                     :item="item"></doctor-item>
      </mescroll-vue>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import DoctorItem from '../../components/DoctorItem';
  import MescrollVue from 'mescroll.js/mescroll.vue';
  import Error from '../../components/Error';
  import NoData from '../../components/NoData';

  export default {
    components: {
      DoctorItem,
      MescrollVue,
      Error,
      NoData
    },
    name: 'YSLB',
    data() {
      return {
        pageCode: 1,
        mescroll: null,
        up: {
          auto: false,
          isBounce: false,
          callback: this.infinite,
          htmlNodata: '<p class="upwarp-nodata">没有更多数据</p>'
        },
        down: {
          auto: false,
          offset: 50,
          mustToTop: true,
          outOffsetRate: 0.3,
          callback: this.refresh,
          autoShowLoading: true
        },
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
        ],
        items: [
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
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
      isLoading: state => state.REGISTER_LIST.isLoading,
      isSuccess: state => state.REGISTER_LIST.isSuccess,
      isFailure: state => state.REGISTER_LIST.isFailure,
      data: state => state.REGISTER_LIST.data
    }),
    watch: {
      $route(to, from) {
        if (from.name === 'WDGH') {
          this.mescroll.setBounce(true);
        }
      }
    }
  };
</script>

<style scoped lang="less">
  @import '../../assets/less/variable';

  .FX_ZHYL_YSLB {
    min-height: 100vh;
    padding-top: 0.5rem;
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
      position: relative;
      z-index: 0;
    }
  }
</style>
