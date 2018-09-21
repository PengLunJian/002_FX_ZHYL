<template>
  <div class="form-group" v-html="template" v-waves.block></div>
</template>

<script type="text/ecmascript-6">
  export default{
    name: 'FormGroup',
    data () {
      return {
        template: ''
      }
    },
    props: ['label', 'type', 'placeholder'],
    methods: {
      getTemplate () {
        this.template = '<label class="form-label">' + this.label + '</label>'
        if (this.type === 'text') {
          this.template += '<input class="form-input" type="text" placeholder="' + this.placeholder + '"/>'
        } else if (this.type === 'select') {
          this.template += '<span class="form-select">' + this.placeholder + '</span>'
        }
      }
    },
    mounted () {
      this.getTemplate()
    }
  }
</script>

<style lang="less">
  @import "../assets/less/variable";

  .form-group {
    position: relative;
    padding-left: 0.15rem;
    background-color: @white;
    .form-label {
      line-height: 0.45rem;
      font-size: 0.14rem;
    }
    .form-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0.45rem;
      text-align: right;
      padding-right: 0.15rem;
      background-color: transparent;
      font-size: 0.14rem;
      color: @fontColor;
    }
    .form-select {
      float: right;
      line-height: 0.45rem;
      padding-right: 0.15rem;
      font-size: 0.14rem;
      color: @fontColor;
    }
    &:after {
      content: '';
      display: block;
      border-top: 1px solid @borderColor;
    }
  }
</style>
