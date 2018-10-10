<template>
  <div class="modal" :class="clazz">
    <div class="modal-dialog">
      <div class="modal-bg" @click="hideModal"></div>
      <div class="modal-content">
        <div class="modal-header"></div>
        <div class="modal-body"></div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Modal',
    data() {
      return {
        clazz: ''
      };
    },
    props: ['isShow'],
    methods: {
      showModal: function () {
        this.clazz = '';
      },
      hideModal: function () {
        this.clazz = 'hide';
      }
    },
    computed() {

    }
  };
</script>

<style scoped lang="less">
  @import "../assets/less/variable";

  .modal {
    .modal-dialog {
      .modal-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        transition: all 300ms ease;
        background-color: rgba(0, 0, 0, .5);
      }
      .modal-content {
        position: fixed;
        width: 3rem;
        height: 3rem;
        top: 50%;
        left: 50%;
        z-index: 1001;
        margin-top: -1.5rem;
        margin-left: -1.5rem;
        box-shadow: @boxShadow;
        border-radius: @borderRadius;
        transition: all 300ms ease;
        background-color: @white;
        .modal-header {

        }
        .modal-body {

        }
        .modal-footer {

        }
      }
    }
    &.hide {
      .modal-bg {
        opacity: 0;
        visibility: hidden;
      }
      .modal-content {
        visibility: hidden;
        transform: scale(0);
      }
    }
  }
</style>
