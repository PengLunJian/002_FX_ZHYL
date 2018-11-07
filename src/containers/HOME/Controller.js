import {mapActions} from 'vuex';

const controller = {
  addVisitor() {
    this.$router.push({
      path: this.$routes.KPBL.path
    });
  },
  showQRCode() {
    this.$router.push({
      path: this.$routes.JZTM.path
    });
  },
  showContent() {
    if (this.clazz === 'hide') {
      const element = document.querySelector('html');
      const fontSize = parseFloat(element.style.fontSize);
      const height = this.$refs.inner.offsetHeight;
      this.style = 'height:' + (height / fontSize) + 'rem;';
      this.clazz = '';
    } else {
      this.style = 'height:' + 0 + 'px;';
      this.clazz = 'hide';
    }
  },
  changeVisitor() {
    this.$router.push({
      path: this.$routes.HZLB.path
    });
  },
  exeSelectDefaultCard() {
    this.$vux.loading.show({
      text: '加载中...'
    });
    this.selectDefaultCard()
      .then((res) => {
        this.$vux.loading.hide();
      })
      .catch((err) => {
        console.log(err);
        this.$vux.loading.hide();
      });
  },
  ...mapActions([
    'selectDefaultCard'
  ])
};

export default controller;
