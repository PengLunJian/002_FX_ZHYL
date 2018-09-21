<template>
  <div class="FX_ZHYL_JZRSFZ">
    <form-group label="姓名" type="text" placeholder="请输入"></form-group>
    <form-group label="身份证号码" type="text" placeholder="请输入"></form-group>
    <form-group label="性别" type="select" placeholder="请选择"></form-group>
    <form-group label="名族" type="select" placeholder="请选择"></form-group>
    <btn-next text="下一步"></btn-next>
  </div>
</template>

<script type="text/ecmascript-6">
  import FormGroup from '../../components/FormGroup'
  import BtnNext from '../../components/Button'
  export default{
    components: {
      BtnNext,
      FormGroup
    },
    name: 'JZRSFZ',
    data () {
      return {}
    }
  }
</script>

<style lang="less">
</style>
