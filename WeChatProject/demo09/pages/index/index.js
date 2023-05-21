// index.js
Page({
  data: {
    message: "BNTang"
  },
  toLog() {
    let that = this;
    wx.navigateTo({
      url: '/pages/logs/logs?name=BNTang&age=18',

      events: {
        abc(data) {
          console.log("自定义事件中：" + data);
          that.setData({message: data.msg});
        }
      }
    })
  }
})
