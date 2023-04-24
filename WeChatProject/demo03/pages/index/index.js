Page({
  data: {
    filePath: ""
  },
  onChooseImage(){
    wx.chooseMedia({
      mediaType: "image",
      success: (res) => {
        console.log(res);
        console.log(res.tempFiles[0].tempFilePath)
        
        const path = res.tempFiles[0].tempFilePath;
        this.setData({filePath: path});
      }
    })
  }
})
