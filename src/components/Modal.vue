<template>
  <div class="modal" :class="getClass">
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
        clazz: 'hide'
      };
    },
    props: ['isShow'],
    methods: {
      hideModal: function () {
        this.$emit('update:isShow', false);
      }
    },
    computed: {
      getClass: function () {
        return this.isShow ? 'show' : 'hide';
      }
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
        transition: all 300ms ease-out;
        background-color: @white;
        .modal-header {

        }
        .modal-body {

        }
        .modal-footer {

        }
      }
    }
    &.show {
      .modal-bg {
        opacity: 1;
        visibility: visible;
      }
      .modal-content {
        visibility: visible;
        animation: in 300ms;
      }
    }
    &.hide {
      .modal-bg {
        opacity: 0;
        visibility: hidden;
      }
      .modal-content {
        visibility: hidden;
        animation: out 300ms;
      }
    }
  }

  @keyframes in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes out {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.8);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
</style>
