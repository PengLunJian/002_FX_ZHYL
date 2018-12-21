<template>
  <div class="module YYJS">
    <div class="row-box-1">
      <i class="icon icon-hospital"></i>
      <span class="text">医院介绍</span>
    </div>
    <div class="row-box-2">
      <p class="desc">
        文荣医院坐落于金华市江南中心区，建成于2003年12月，是一所金华市直属的非营利性二级甲等综合性医院，占地面积约80亩。现有员工600余名，其中金华市名医6名，高级职称人数60余名，中级职称人数100余名，有50余名专家及学科带头人来自金华市中心医院、中医院、人民医院等三级医院。
        医院有16个病区共500余张床位，院内布局合理，环境优美，整洁舒适，绿化面积达60%，为金华市首家花园式医院。
      </p>
      <p class="desc">
        医院配备开放式核磁共振（MRI）、螺旋CT、数字减影血管造影机（DSA）、胶囊胃镜、电子胃镜、肠镜、尿道膀胱镜、输尿管镜、关节镜、腹腔镜、宫腔镜、气管镜、血液净化设施、体外循环机、康复治疗设施等一系列先进的医疗设备。
      </p>
      <p class="desc">
        医院科室设置齐全，妇产科、骨科、耳鼻咽喉科、肾内科、风湿免疫科、消化内科、康复医学科为医院重点学科，其中消化内科和康复医学科为浙江省非公立医疗机构临床特色学科。并设有心血管内科、神经内科、呼吸内科、内分泌科、中医科、小儿内科、普外科、泌尿外科（小儿外科）、肿瘤外科、神经外科、手足外科、眼科、口腔科、整形美容科、碎石科、急诊科、麻醉科、ICU（重症监护室）、针灸理疗科、体检中心等特色专科。
      </p>
      <p class="desc">
        医院加入了浙江省预约挂号诊疗平台，通过网站、微信、电话、门诊诊间、病区医生站、一站式服务中心等多种方式预约挂号，方便大众就诊。
      </p>
      <p class="desc">
        医院还与北京、上海、杭州等地多家上级医院建立了友好协作关系，一批国内、省内知名专家定期来我院坐诊、查房、手术，使市民在金华就能享受到国家级、省级专家的高水平医疗服务。
      </p>
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
        border-bottom: @border;
      }
    }
    .row-box-2 {
      padding: 0.1rem 0.15rem;
      .desc {
        line-height: 0.2rem;
        text-align: justify;
        text-indent: 2em;
        color: @fontColor;
      }
    }
  }
</style>
