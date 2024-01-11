// 1.拿到当前环境对应的数据库
const db = wx.cloud.database();

// 2.拿到当前数据库中指定的集合（也就是本次要操作的集合）
const stuCollection = db.collection('stu');

Page({
    async onAddTap() {
        const res = await stuCollection.add({
            data: {
                name: '翠花',
                age: 18,
            }
        })

        console.log(res);
    },
    onQueryTap() {

    },
    onRemoveTap() {

    },
    onUpdateTap() {

    }
})
