<template>
  <div class="buttons">
    <button class="btn btn-next waves-effect waves-block" :class="this.status" v-waves.block>{{text}}</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'btn-next',
    props: ['text', 'status'],
    data () {
      return {};
    }
  };
</script>

<style lang="less">
  @import "../assets/less/variable";

  .buttons {
    padding: 0.35rem 0.2rem 0;
    .btn-next {
      width: 100%;
      display: block;
      line-height: 0.47rem;
      border-radius: @borderRadius;
      border: 1px solid @buttonColor2;
      background-color: @buttonColor2;
      font-size: 0.16rem;
      color: @white;
    }
  }
</style>
