// 云函数入口文件
const cloud = require('wx-server-sdk')

// 使用当前云环境
cloud.init({env: cloud.DYNAMIC_CURRENT_ENV})

// 云函数入口函数
exports.main = async (event, context) => {
    // 1. 拿到当前环境对应的数据库
    const db = cloud.database();

    // 2. 拿到数据库中指定的集合
    const stuCollection = db.collection("stu");

    // 3. 查询指定集合数据
    const res = await stuCollection.get();

    // 4.对数据进行加工处理
    const stuInfo = {
        name: "终结二班",
        list: res.data
    }

    // 5.返回加工后的数据，给前端直接使用
    return stuInfo;
}
