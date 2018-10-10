<template>
  <div class="module PBXX">
    <h3 class="title"><span>排班信息</span></h3>
    <table border="0" cellpadding="0" cellspacing="0">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th><span>09 - 05</span><span>周三</span></th>
        <th><span>09 - 06</span><span>周四</span></th>
        <th><span>09 - 07</span><span>周五</span></th>
        <th><span>09 - 08</span><span>周六</span></th>
        <th><span>09 - 09</span><span>周日</span></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="am"><span>上午</span></td>
        <td><span class="on" @click="handlerClick">预约</span></td>
        <td><span class="on">预约</span></td>
        <td><span class="on">预约</span></td>
        <td><span class="off">约满</span></td>
        <td><span class="off">约满</span></td>
      </tr>
      <tr>
        <td class="pm"><span>下午</span></td>
        <td><span class="off">约满</span></td>
        <td><span class="off">约满</span></td>
        <td><span class="on">预约</span></td>
        <td><span class="on">预约</span></td>
        <td><span class="on">预约</span></td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="6">排班信息以医院实际发布为准</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  import routes from '../../router/routes';

  export default {
    name: 'PBXX',
    data() {
      return {};
    },
    methods: {
      handlerClick: function () {
        this.$router.push({
          path: routes[3].path
        });
      }
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .PBXX {
    min-height: 2.2rem;
    table {
      width: 100%;
      text-align: center;
      color: #808080;
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
        &.am, &.pm {
          font-size: 0.16rem;
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
          &:nth-child(n+2) {
            span {
              padding: 0 0.1rem;
            }
          }
        }
      }
      tfoot {
        td {
          text-align: right;
          padding-right: 0.15rem;
          border-bottom: none;
        }
      }
    }
  }
</style>
