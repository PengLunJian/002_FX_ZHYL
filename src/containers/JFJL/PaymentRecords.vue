<template>
  <div class="payment-items">
    <pay-item v-for="(item,index) in items"
              :key="index"
              :item="item"></pay-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex';
  import Controller from './Controller';
  import PayItem from '../../components/PayItem';

  export default {
    components: {PayItem},
    name: 'PaymentRecords',
    data() {
      return {};
    },
    props: ['status'],
    methods: Controller,
    mounted() {
      console.log(this.status);
    },
    computed: mapState({
      items: (state) => {
        return [{}, {}, {}];
      }
    })
  };
</script>

<style scoped lang="less">
</style>
