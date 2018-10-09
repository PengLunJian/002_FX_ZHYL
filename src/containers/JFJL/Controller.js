const controllers = {
  tabChange: function (index) {
    this.tabIndex = index;
    this.currentComponent = this.items[index].component;
  }
};

export default controllers;
