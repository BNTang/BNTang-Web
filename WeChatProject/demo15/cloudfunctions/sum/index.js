// 云函数入口文件
const cloud = require('wx-server-sdk')

// 使用当前云环境
cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

// 云函数入口函数
exports.main = async (event, context) => {
  const { num1, num2 } = event;
  const res = num1 + num2;

  console.log("云端：" + res);
  return res;
}