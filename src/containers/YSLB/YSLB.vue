<template>
  <div class="module ZZYS">
    <doctor-item v-for="item in items"
                 :key="item.index"
                 :logo="item.logo"
                 :name="item.name"
                 :post="item.post"
                 :good="item.good"></doctor-item>
  </div>
</template>

<script type="text/ecmascript-6">
  import DoctorItem from '../../components/DoctorItem'
  export default{
    components: {DoctorItem},
    name: 'ZZYS',
    data () {
      return {
        items: [
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          },
          {
            logo: require('../../assets/images/doctor@2x.png'),
            name: '胡代宇',
            post: '职称：正主任医师',
            good: '视网膜、青光眼、斜视等眼病'
          }
        ]
      }
    }
  }
</script>

<style lang="less">
</style>
