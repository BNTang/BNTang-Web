// 云函数入口文件
const cloud = require('wx-server-sdk')

// 使用当前云环境
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

function example() {
  return "我是 example 函数";
}

// 云函数入口函数
exports.main = async (event, context) => {
  const res= example();
  return res;
}