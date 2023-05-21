// index.js
Page({
  getUserLocation() {
    wx.getLocation({
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        
        console.log(res);
      }
     })
  }
})
