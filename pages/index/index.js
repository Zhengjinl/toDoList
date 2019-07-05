//index.js
var util = require('../../utils/util.js');  
//获取应用实例
const app = getApp()

Page({
  data: {
    wHeight: '',
    userInfo: {},
    hasUserInfo: false,
    time: '',
    todoList:[
      {'title':'重要不紧急','cont': ['今天你吃饭了吗', '有个地方还没去', '哈哈哈哈哈哈哈', '不变速百度搜不是']},
      { 'title': '重要且紧急', 'cont': ['拉阿拉啦啦啦啦啦', '少时诵诗书所', '第三方第三方而定', '第三次发生大V从', '拉阿拉啦啦啦啦啦', '少时诵诗书所', '第三方第三方而定', '啦啦啦啦', '拉阿拉啦啦啦啦啦', '少时诵诗书所', '第三方第三方而定']},
      { 'title': '不重要不紧急','cont': ['不重要但是很紧急', '什么事没什么什么事', '第嘎嘎嘎嘎嘎过过过', '少吃点饭']},
      { 'title': '不重要但紧急','cont':['不重要紧急','有时间做就好','其他任务要优先做','哈哈哈哈']}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    console.error('点击登录')
    wx.navigateTo({
      url: '../home/home'
    })
  },
  onLoad: function () {
    var that =this
    var currentTime = util.formatTime(new Date()).split(" ");
    console.error(currentTime)
    var height = wx.getSystemInfoSync().windowHeight; 
    that.setData({
      wHeight: height,
      ['time.data']: currentTime[0],
      ['time.week']: currentTime[1]
    });  
    console.error(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        ['userInfo.job']: '前端工程师',
        hasUserInfo: true
      })
    } else if (that.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  // getUserInfo: function(e) {
  //   console.error(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
