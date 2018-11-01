const controllers = {
  tabChange: function (index) {
    this.tabIndex = index;
    this.currentComponent = this.tabs[index].component;
  },
  init(mescroll) {
    this.mescroll = mescroll;
  },
  refresh() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode = 1;
      this.ajaxRequestRegisterList();
    }, 500);
  },
  infinite() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.pageCode++;
      this.ajaxRequestRegisterList();
    }, 500);
  },
  ajaxRequestRegisterList() {
    console.log(this.pageCode);
  }
};

export default controllers;
