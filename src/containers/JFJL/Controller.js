const controllers = {
  tabChange: function (index) {
    this.tabIndex = index;
    this.currentComponent = this.tabs[index].component;
  }
};

export default controllers;
