const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  // API 调用都保持和云函数当前所在环境一致
  env: cloud.DYNAMIC_CURRENT_ENV
})

/*
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 */
//exports.main = (event, context) => {
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）等信息
  //const wxContext = cloud.getWXContext()
exports.main = async (event, context) => {
  let { OPENID, APPID, UNIONID, ENV} = await cloud.getWXContext()
  return {
    openid: OPENID,
    appid: APPID,
    unionid: UNIONID,
    env: ENV,
    //env: wxContext.ENV,
  }
 }


