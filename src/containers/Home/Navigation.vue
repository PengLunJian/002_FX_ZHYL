<template>
  <div class="module navigation">
    <NavItem v-for="item in items" :key="item.index" :image="item.image" :title="item.title"
             :path="item.path"></NavItem>
  </div>
</template>

<script type="text/ecmascript-6">
  import NavItem from '../../components/NavItem.vue'
  export default{
    name: '',
    components: {NavItem},
    data () {
      return {
        items: [
          {
            image: require('../../assets/images/nav_icon01@2x.png'),
            title: '预约',
            path: '/Nav01'
          },
          {
            image: require('../../assets/images/nav_icon02@2x.png'),
            title: '挂号',
            path: '/Nav02'
          },
          {
            image: require('../../assets/images/nav_icon03@2x.png'),
            title: '绑卡',
            path: '/Nav03'
          },
          {
            image: require('../../assets/images/nav_icon04@2x.png'),
            title: '医院指南',
            path: '/Nav04'
          },
          {
            image: require('../../assets/images/nav_icon05@2x.png'),
            title: '我的收藏',
            path: '/Nav05'
          },
          {
            image: require('../../assets/images/nav_icon06@2x.png'),
            title: '智能导航',
            path: '/Nav06'
          }
        ]
      }
    }
  }
</script>

<style lang="less">

</style>
