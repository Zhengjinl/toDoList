// pages/todoList/todoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    wHeight: '0',
    idx: '',
    title: '重要不紧急',
    todoSize: 11,
    todoList: [{
        'date': '7月26号 周五',
        'todoList': [{
          'id': '100001',
          'todoName': '今天你吃饭了吗'
        }, {
          'id': '100002',
          'todoName': '有个地方还没去'
        }, {
          'id': '100003',
          'todoName': '哈哈哈哈哈哈哈'
        }]
      },
      {
        'date': '7月29号 周一',
        'todoList': [{
          'id': '100004',
          'todoName': '不变速百度搜不是'
        }]
      },
      {
        'date': '8月5号 周一',
        'todoList': [{
          'id': '200003',
          'todoName': '第三方第三方而定'
        }, {
          'id': '200004',
          'todoName': '少时诵诗书所所所所所所所所所所啊啊啊啊啊啊啊啊啊啊'
        }, {
          'id': '200005',
          'todoName': '拉阿拉啦啦啦啦啦'
        }]
      },
      {
        'date': '7月13号 周二',
        'todoList': [{
          'id': '200006',
          'todoName': '少吃点饭'
        }]
      },
      {
        'date': '7月15号 周四',
        'todoList': [{
          'id': '300002',
          'todoName': '什么事没什么什么事'
        }, {
          'id': '300004',
          'todoName': '第嘎嘎嘎嘎嘎过过过'
        }]
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.query)
    var that = this;
    if (options.datas) {
      var param = JSON.parse(options.datas);
      var idx = parseInt(param.index)
      console.log(param);
      console.log(idx);
      var title;
      switch (idx) {
        case 0:
          title = '重要不紧急';
          break;
        case 1:
          title = '重要且紧急';
          break;
        case 2:
          title = '不重要不紧急';
          break;
        case 3:
          title = '不重要但紧急';
          break;
      }
      console.log(678, title)
      that.setData({
        title: title,
        idx: idx
      })
    }

    var height = wx.getSystemInfoSync().windowHeight;
    that.setData({
      wHeight: height,
      loading: false
    });
  },
  gotoDetail: function(e) {
    console.log(this.data.idx)
    var datas = {
      id: e.currentTarget.dataset.id,
      index: this.data.idx
    }
    datas = JSON.stringify(datas)
    wx.navigateTo({
      url: '../todoDetail/todoDetail?data=' + datas
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})