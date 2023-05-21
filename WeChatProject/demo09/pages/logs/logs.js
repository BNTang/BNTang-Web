// logs.js
Page({
  onLoad(options) {
    console.log(options);
    console.log(options.name);
    console.log(options.age);
  },
  myNavigatorBack() {
    wx.navigateBack({})

    let eventChannel = this.getOpenerEventChannel();
    eventChannel.emit("abc", {msg: "我是BNTang"});
  }
})