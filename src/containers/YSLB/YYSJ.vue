<template>
  <div class="module YYSJ">
    <ul class="date-items">
      <li class="date-item active">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
      <li class="date-item">
        <span class="date-number">09 - 05</span>
        <span class="date-text">周三</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'YYSJ',
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  .YYSJ {
    .date-items {
      width: 100%;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      font-size: 0;
    }
    .date-item {
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
        &.date-number {
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
          border-top: 0.015rem solid #0061e8;
        }
      }
    }
  }
</style>
