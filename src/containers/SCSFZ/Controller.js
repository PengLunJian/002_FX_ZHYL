import WX from '../../WX_SDK/WX_SDK';

const controllers = {
  showActionSheet: function () {
    this.value = true;
  },
  config: function () {
    WX.config();
  },
  chooseImage: function () {
    WX.chooseImage();
  }
};

export default controllers;
