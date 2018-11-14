import {mapActions} from 'vuex';

const controller = {
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
    }, 500);
  },
  exeSelectSubscribeList() {
    this.selectSubscribeList();
  },
  ...mapActions([
    'selectSubscribeList'
  ])
};

export default controller;
