Page({
    async onTestTap() {
        const res = await wx.cloud.callFunction({
            name: 'test'
        });

        console.log(res)
    },
    async onCloudFnParamTap() {
        const res = await wx.cloud.callFunction({
            name: 'sum',
            // data，可选参数
            data: {
                num1: 20,
                num2: 30
            }
        });

        console.log(res)
    },
    async onCloudFnProcessingDataTap() {
        const res = await wx.cloud.callFunction({
            name: 'getStu',
        });

        console.log(res);
    },
    async onOpenIdTap() {
        const res = await wx.cloud.callFunction({
            name: 'demo',
        });

        console.log(res);
    }
})
