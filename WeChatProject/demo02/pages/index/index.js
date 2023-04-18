// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {},
  onOneClick: function() {
    console.log('捕获:onOneClick');
  },
  onTwoClick: function() {
    console.log('捕获:onTwoClick');
  },
  onThreeClick: function() {
    console.log('捕获:onThreeClick');
  },
  onOneClick1: function() {
    console.log('冒泡:onOneClick1');
  },
  onTwoClick1: function() {
    console.log('冒泡:onTwoClick1');
  },
  onThreeClick1: function() {
    console.log('冒泡:onThreeClick1');
  },
  oneTap: function(event){
    console.log('oneTap', event);
    console.log(event.mark.name);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})