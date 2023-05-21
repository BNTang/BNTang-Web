// index.js
Page({
  data: {
    isShow: true
  },
  toggleShow() {
    this.setData({isShow: !this.isShow})
  }
})
