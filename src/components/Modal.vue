<template>
  <div class="modal" :class="clazz">
    <div class="modal-dialog">
      <div class="modal-bg"></div>
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
    methods: {
      show: function () {
        this.clazz = '';
      },
      hide: function () {
        this.clazz = 'hide';
      }
    }
  };
</script>

<style scoped lang="less">
  .modal {
    .modal-dialog {
      .modal-bg {

      }
      .modal-content {
        .modal-header {

        }
        .modal-body {

        }
        .modal-footer {

        }
      }
    }
  }
</style>
