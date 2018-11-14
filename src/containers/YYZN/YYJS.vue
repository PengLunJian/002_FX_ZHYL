<template>
  <div class="module YYJS">
    <div class="row-box-1">
      <i class="icon icon-hospital"></i>
      <span class="text">医院介绍</span>
    </div>
    <div class="row-box-2">
      <p class="desc">
        芜湖市第二人民医院始建于1953年，是芜湖市人民政府创办的第一所综合性医院。历经六十年，已发展成为一所集医疗、教学、科研、预防、保健、康复为一体的三级甲等综合性医院，是皖南医学院附属医院和硕士生培养点，南通大学芜湖临床学院，武汉大学第一临床学院硕士生培养点，复旦大学附属中山医院协作医院，复旦大学附属肿瘤医院友好合作医院,中国医科大学附属盛京医院“盛京医疗联盟”医院，法国第戎医疗中心协作医院。</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'YYJS',
    data() {
      return {};
    }
  };
</script>

<style scoped lang="less">
  @import "../../assets/less/variable";

  .YYJS {
    .row-box-1 {
      line-height: 0.37rem;
      padding-left: 0.15rem;
      font-size: 0;
      .icon {
        display: inline-block;
        vertical-align: middle;
        color: #23ac38;
        font-size: 0.2rem;
      }
      .text {
        padding-left: 0.1rem;
        display: inline-block;
        vertical-align: middle;
        font-size: 0.16rem;
      }
      &:after {
        content: '';
        display: block;
        border-bottom: 1px solid @borderColor;
      }
    }
    .row-box-2 {
      .desc {
        padding: 0.1rem 0.15rem 0.2rem;
        line-height: 0.2rem;
        text-align: justify;
        color: @fontColor;
      }
    }
  }
</style>
