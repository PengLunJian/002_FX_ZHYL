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
      })
      .catch((err) => {
        console.log(err);
      });
  },
  exeSelectMessageList() {
    if (this.isLoading) {
      this.showMessage();
      return;
    }
    this.selectMessageList()
      .then((res) => {
        res = res || {};
        const {success} = res;
        if (success) {
          this.showMessage();
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
