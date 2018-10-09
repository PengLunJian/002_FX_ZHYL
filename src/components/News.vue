<template>
  <div class="module news">
    <ul class="news-items" :style="style">
      <li class="news-item ellipsis" :key="item.index" v-for="item in items">{{item.text}}</li>
    </ul>
    <i class="news-icon icon-next"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'News',
    data() {
      return {
        value: 0,
        style: '',
        items: [
          {
            text: '1.我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻'
          },
          {
            text: '2.我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻'
          },
          {
            text: '3.我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻'
          },
          {
            text: '4.我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻'
          },
          {
            text: '5.我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻'
          },
          {
            text: '6.我是新闻我是新闻我是新闻我是新闻我是新闻我是新闻'
          }
        ]
      };
    },
    methods: {
      startMove: function () {
        this.items = this.items.concat(this.items);
        setInterval(function () {
          this.value += -40;
          this.style = 'transform:translateY(' + this.value + 'px)';
          if (-40 * (this.items.length / 2) >= this.value) {
            setTimeout(function () {
              this.value = 0;
              this.style = 'transform:translateY(' + this.value + 'px);transition:all 0ms ease-out;';
            }.bind(this), 300);
          }
        }.bind(this), 3000);
      }
    },
    mounted() {
      this.startMove();
    }
  };
</script>

<style scoped lang="less">
  .news {
    position: relative;
    height: 0.4rem;
    line-height: 0.4rem;
    padding: 0 0.4rem;
    overflow: hidden;
    background-size: 0.2rem auto;
    background-repeat: no-repeat;
    background-position: 0.15rem center;
    background-image: url('../assets/images/news_icon@2x.png');
    .news-items {
      transition: all 300ms ease-out;
      .news-item {
        width: 100%;
        padding: 0 0.15rem;
        text-align: left;
      }
    }
    .news-icon {
      width: 0.4rem;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      line-height: 0.4rem;
      text-align: center;
    }
  }
</style>
