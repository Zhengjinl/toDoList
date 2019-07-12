// pages/todoDetail/todoDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todo: {
      'id': '100001',
      'todoName': '今天你吃饭了吗',
      'cont': '说的说的所多所多多所多多所的长处吃点菜吃点菜当初当初蔡少芬的人热服务而非的味道无法大神带的翁是多少范德萨发送到发热无法分分分分完成大V是的深V的深V是的深V发水电费大V发v',
      'leval': '',
      'progress': '30%',
      'isAllDay': true,
      'startTime': '7月16号 9:00',
      'endTime': '7月30号 23:00'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var data = JSON.parse(options.data)
    var that = this
    var leval=''
    switch (data.index) {
      case 0:
        leval = '重要不紧急';
        break;
      case 1:
        leval = '重要且紧急';
        break;
      case 2:
        leval = '不重要不紧急';
        break;
      case 3:
        leval = '不重要但紧急';
        break;
    }
    console.log(leval);
    that.setData({
      ['todo.leval']: leval,
      ['todo.id']: data.id
    })
  },
  switch1Change: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
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