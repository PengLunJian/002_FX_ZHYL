<template>
  <div class="module KSMC">
    <h3 class="name">眼科中心</h3>
    <p class="desc">开展业务：各种屈光疾病、白内障、青光眼、玻璃体及视网膜等眼底病</p>
    <!--<button class="btn btn-collection" v-waves.block>收藏科室</button>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'KSMC',
    data () {
      return {};
    }
  };
</script>

<style scoped lang="less">
  .KSMC {
    height: 1.1rem;
    position: relative;
    background-repeat: no-repeat;
    background-size: 0.65rem auto;
    background-position: 0.15rem center;
    padding: 0.2rem 1.2rem 0.2rem 0.95rem;
    background-image: url("../../assets/images/hospital@2x.png");
    .name {
      font-size: 0.14rem;
      font-weight: normal;
      margin-bottom: 0.05rem;
    }
    .desc {
      color: #d0d0d0;
      font-size: 0.12rem;
      text-align: justify;
      line-height: 0.18rem;
    }
    .btn-collection {
      position: absolute;
      top: 50%;
      right: 0.15rem;
      padding: 0 0.15rem;
      line-height: 0.3rem;
      margin-top: -0.15rem;
      border-radius: 0.03rem;
      border: 1px solid #3b89ed;
      color: #3b89ed;
    }
  }
</style>
