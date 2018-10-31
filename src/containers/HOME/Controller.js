import apis from '../../apis/index';
import {
  updateDefaultCardFun
} from '../../vuex/actions';

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
  ajaxRequestDefaultCard() {
    this.$axios.post(apis.selectDefaultCard)
      .then((res) => {
        this.$vux.loading.hide();
        const {data} = res;
        if (data && typeof data === 'object') {
          this.$store.dispatch(updateDefaultCardFun(data));
          this.isSelect = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export default controller;
