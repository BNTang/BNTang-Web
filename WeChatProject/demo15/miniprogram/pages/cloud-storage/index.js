Page({
    data: {
        tempFilePath: ""
    },
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
    async onDownTap() {
        const res = await wx.cloud.downloadFile({
            // 文件 ID
            fileID: 'cloud://cloud1-5gnw7kej2c68cd30.636c-cloud1-5gnw7kej2c68cd30-1322890583/test/1705207755152.jpg',
        });

        console.log(res);

        this.setData({
            tempFilePath: res.tempFilePath
        });
    },
    async onDelTap() {
        const res = await wx.cloud.deleteFile({
            fileList: ['cloud://cloud1-5gnw7kej2c68cd30.636c-cloud1-5gnw7kej2c68cd30-1322890583/blob_20230708113926A001.png'],
        });

        console.log(res);
    },
    async onTempPathTap() {
        const res = await wx.cloud.getTempFileURL({
            fileList: ['cloud://cloud1-5gnw7kej2c68cd30.636c-cloud1-5gnw7kej2c68cd30-1322890583/dengdeng3.jpg'],
        });

        console.log(res);
    },
})
