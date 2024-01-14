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
    async onQueryTap() {
        const res = await stuCollection.field({
            name: true
        }).get();
        console.log(res);
    },
    async onRemoveTap() {
        // 1.拿到条件判断工具对象
        const _ = db.command;
        const res = await stuCollection.where({
            age: _.lt(19)
        }).remove();

        console.log(res);
    },
    async onUpdateTap() {
        const res = await stuCollection.doc('08bade59659d76d500164eca51e17bd0').update({
            data: {
                age: 99
            }
        });

        console.log(res);
    }
})
