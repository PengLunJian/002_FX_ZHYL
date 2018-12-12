import {mapActions, mapMutations} from 'vuex';
import {getUriPath} from '../../utils';

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
  showDetail(msgUrl) {
    const path = getUriPath(msgUrl);
    if (!path) return;
    this.$router.push({
      path: path
    });
  },
  showMessage() {
    if (this.clazz === 'hide') {
      if (!this.isLoading) this.exeSelectMessageList();
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
    this.selectDefaultCard()
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectMessageList() {
    this.selectMessageList()
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  ...mapActions([
    'selectDefaultCard',
    'selectMessageList'
  ]),
  ...mapMutations([
    'SELECT_MESSAGE_LIST_REQUEST'
  ])
};

export default controller;
