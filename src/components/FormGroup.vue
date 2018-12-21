<template>
  <div class="form-group" @input="handlerInput" @click="handlerClick" v-html="template"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FormGroup',
    data() {
      return {
        template: '',
        val: this.value
      };
    },
    props: ['label', 'type', 'value', 'placeholder'],
    methods: {
      getTemplate() {
        this.template = '<label class="form-label">' + this.label + '</label>';
        if (this.type === 'text') {
          this.template += '<input class="form-input" type="text" v-model="' +
            this.val + '" " placeholder="' + this.placeholder + '"/>';
        } else if (this.type === 'select') {
          this.template += '<span class="form-select">' + (this.value || this.placeholder) + '</span>';
        }
      },
      handlerClick() {
        this.$emit('showMenus');
      },
      handlerInput() {
        this.$emit('handlerChange', this.val);
      }
    },
    mounted() {
      this.getTemplate();
    }
  };
</script>

<style scoped lang="less">
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
      border-top: @border;
    }
  }
</style>
