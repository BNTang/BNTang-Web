// app.js
App({
  onLaunch(options) {
    console.log("小程序被启动了", options);
  },
  onShow() {
    console.log("小程序显示出来了");
  },
  onHide() {
    console.log("小程序被隐藏了");
  }
});