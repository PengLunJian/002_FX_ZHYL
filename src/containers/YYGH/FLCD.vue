<template>
  <div class="module FLCD">
    <div class="col-xs-6 filter">
      <no-data v-if="isParentSuccess&&!isParentData"></no-data>
      <error v-if="isParentFailure&&!isParentData"></error>
      <ul class="inner-block" v-if="isParentSuccess&&isParentData">
        <li class="btn btn-filter"
            :class="index===activeIndex?' active':''"
            @click="handlerFilter(index,item.deptCode)"
            v-for="(item,index) in isParentData"
            :key="index">{{item.deptName}}
        </li>
      </ul>
    </div>
    <div class="col-xs-6 result">
      <no-data v-if="isChildSuccess&&!isChildData"></no-data>
      <error v-if="isChildFailure" @refresh="exeSelectSubDepartment"></error>
      <ul class="inner-block" v-if="isChildSuccess&&isChildData">
        <li class="btn btn-result"
            @click="handlerResult(item.deptCode)"
            v-for="(item,index) in isChildData"
            :key="index">{{item.deptName}}
        </li>
      </ul>
    </div>
    <div class="clear"></div>
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
    name: 'Menus',
    data() {
      return {
        activeIndex: 0
      };
    },
    props: ['tabIndex'],
    methods: Controller,
    computed: mapState({
      isParentSuccess: state => state.DEPARTMENT.isSuccess,
      isParentFailure: state => state.DEPARTMENT.isFailure,
      isParentData: state => state.DEPARTMENT.data,
      isChildSuccess: state => state.SUB_DEPARTMENT.isSuccess,
      isChildFailure: state => state.SUB_DEPARTMENT.isFailure,
      isChildData: state => state.SUB_DEPARTMENT.data
    })
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .FLCD {
    height: 100%;
    margin-bottom: 0;
    .filter {
      height: 100%;
      overflow-y: auto;
      position: relative;
      background-color: @bgColor;
      -webkit-overflow-scrolling: touch;
      .inner-block {
        .btn-filter {
          height: 0.45rem;
          position: relative;
          line-height: 0.45rem;
          padding-left: 0.3rem;
          border-bottom: 1px solid #d9d9d9;
          font-size: 0.14rem;
          &.active {
            color: @activeColor;
            background-color: @white;
            &:after {
              content: '';
              width: auto;
              height: auto;
              display: block;
              position: absolute;
              top: 50%;
              left: 0.15rem;
              visibility: visible;
              margin-top: -0.05rem;
              border-top: 0.05rem solid transparent;
              border-left: 0.08rem solid @activeColor;
              border-bottom: 0.05rem solid transparent;
            }
          }
        }
      }
    }
    .result {
      height: 100%;
      overflow-y: auto;
      position: relative;
      -webkit-overflow-scrolling: touch;
      .inner-block {
        .btn-result {
          height: 0.45rem;
          line-height: 0.45rem;
          padding-left: 0.3rem;
          font-size: 0.14rem;
        }
      }
    }
  }
</style>
