import wx from 'weixin-js-sdk'

const controllers = {
  showActionSheet: function () {
    this.value = true
  },
  chooseImage: function () {
    console.log(wx)
  }
}

export default controllers
