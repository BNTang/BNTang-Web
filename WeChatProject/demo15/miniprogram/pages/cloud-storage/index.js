Page({
    async onUpTap() {
        // 1. 拿到相册中的图片
        const images = await wx.chooseMedia({
          type: "image"
        });

        const imagePath = images.tempFiles[0].tempFilePath;

        // 2.动态生成文件名称
        const timeStamp = new Date().getTime();

        // 文件后缀
        const extension = imagePath.split(".").pop();
        const cloudPath = `test/${timeStamp}.${extension}`;

        const res = await wx.cloud.uploadFile({
          // 被上传文件路径
          filePath: imagePath,
          // 存储在云端路径
          cloudPath: cloudPath
        });

        console.log(res);
    },
    onDownTap() {

    },
    onDelTap() {

    },
    onTempPathTap() {

    },
})
