// index.js
Page({
  onShowToast() {
    wx.showToast({
      title: '成功',
      icon: "success",
      duration: 3000,
      mask: true,
      success() {
        console.log("显示成功");
      },
      fail() {
        console.log("显示失败");
      },
      complete() {
        console.log("complete");
      }
    })
  },
  onShowLoading() {
    wx.showLoading({
      title: '加载中',
    })

    // 注意点：不会主动消失，其它的和showToast差不多
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  onShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      cancelText: "撤退",
      cancelColor: "#00f",
      confirmText: "确认",
      confirmColor: "#f00",
      complete: (res) => {
        if (res.cancel) {
          console.log('点击了取消按钮');
        }

        if (res.confirm) {
          console.log('点击了确认按钮');
        }
      }
    })
  },
  onShowActionSheet() {
    wx.showActionSheet({
      itemList: ["电脑", "手机", "家具"],
      itemColor: '#f00',
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
        console.log("点击了取消");
      }
    })
  }
})
