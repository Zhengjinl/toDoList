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
    todoList: [{
        'title': '重要不紧急',
        'cont': [{
          'id': '100001',
          'todoName': '今天你吃饭了吗'
        }, {
          'id': '100002',
          'todoName': '有个地方还没去'
        }, {
          'id': '100003',
          'todoName': '哈哈哈哈哈哈哈'
        }, {
          'id': '100004',
          'todoName': '不变速百度搜不是'
        }]
      },
      {
        'title': '重要且紧急',
        'cont': [{
          'id': '200001',
          'todoName': '拉阿拉啦啦啦啦啦'
        }, {
          'id': '200002',
          'todoName': '少时诵诗书所'
        }, {
          'id': '200003',
          'todoName': '第三方第三方而定'
        }, {
          'id': '200004',
          'todoName': '少时诵诗书所所所所所所所所所所啊啊啊啊啊啊啊啊啊啊'
        }, {
          'id': '200005',
          'todoName': '拉阿拉啦啦啦啦啦'
        }, {
          'id': '200006',
          'todoName': '少吃点饭'
        }, {
          'id': '200007',
          'todoName': '拉阿拉啦啦啦啦啦'
        }, {
          'id': '200008',
          'todoName': '拉阿拉啦啦啦啦啦'
        }, {
          'id': '200009',
          'todoName': '拉阿拉啦啦啦啦啦'
        }, {
          'id': '200010',
          'todoName': '拉阿拉啦啦啦啦啦'
        }]
      },
      {
        'title': '不重要不紧急',
        'cont': [{
          'id': '300001',
          'todoName': '不重要但是很紧急'
        }, {
          'id': '300002',
          'todoName': '什么事没什么什么事'
        }, {
          'id': '300003',
          'todoName': '哈哈哈哈哈哈哈'
        }, {
          'id': '300004',
          'todoName': '第嘎嘎嘎嘎嘎过过过'
        }]
      },
      {
        'title': '不重要但紧急',
        'cont': [{
          'id': '400001',
          'todoName': '不重要紧急'
        }, {
          'id': '400002',
          'todoName': '有时间做就好'
        }, {
          'id': '400003',
          'todoName': '其他任务要优先做'
        }, {
          'id': '400004',
          'todoName': '大是大非是是大V'
        }]
      }
    ],
    tipHide: false
  },
  onLoad: function() {
    var that = this
    var currentTime = util.formatTime(new Date()).split(" ");
    var height = wx.getSystemInfoSync().windowHeight;
    that.setData({
      wHeight: height,
      ['time.data']: currentTime[0],
      ['time.week']: currentTime[1]
    });
    console.error(app.globalData)
    if (app.globalData.userInfo) {
      that.setData({
        userInfo: app.globalData.userInfo,
        ['userInfo.job']: '前端工程师',
        hasUserInfo: true
      })
    } else if (that.data.canIUse) {
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
          console.error(11, res.userInfo)
          that.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    console.error(this.userInfo)
  },
  // 首次进入重要事情弹框关闭跳转事件
  closeTip: function(e) {
    this.setData({
      tipHide: true
    })
  },
  gotoList: function(e) {
    console.error('列表走起')
    console.error(e.target.dataset.index)
    let datas = {
      index: e.currentTarget.dataset.index
    }
    let data = JSON.stringify(datas)
    wx.navigateTo({
      url: '../todoList/todoList?datas=' + data
    })
    this.setData({
      tipHide: true
    })
  },
  gotoDetail: function(e) {
    console.error('去详情喽')
    console.error(e.target.dataset.id)
    var datas={
      id : e.currentTarget.dataset.id,
      index: e.currentTarget.dataset.index
    }
    console.log(datas)
    datas=JSON.stringify(datas)
    wx.navigateTo({
      url: '../todoDetail/todoDetail?data=' + datas
    })
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