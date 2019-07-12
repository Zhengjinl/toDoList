// pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogBtnActive: false,
    isRegBtnActive: false,
    userName: '',
    registerName:'',
    password:'',
    messCode:'',
    loginRegister:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(1122334,app.globalData)
    if (app.globalData.userInfo) {
      wx.switchTab({
        url: '../index/index',
      })
    } 
  },
  onGotUserInfo: function (e) {
    if (e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo
      wx.setStorage({ 
        key:'userInfo',
        data: e.detail.userInfo
      })
      this.gotoIndex()
    }else{
      wx:wx.showToast({
        title: '授权失败',
        icon: 'none',
        duration: 2000,
        mask: true
      })
    }
  },
  gotoIndex: function(){
    console.error("gotoIndexs");
    
    wx.switchTab({
      url: '../index/index',
    })
  },
  loginRegister: function(e){
    console.error(e.target.dataset.id)
    this.setData({
      loginRegister: e.target.dataset.id
    })
  },
  changeName:function(e){
    this.setData({
      userName: e.detail.value
    })
    if (this.data.userName != '' && this.data.password != '') {
      this.setData({
        isLogBtnActive: true
      })
    }else{
      this.setData({
        isLogBtnActive: false
      })
    }
  },
  changePassword: function (e) {
    this.setData({
      password: e.detail.value
    })
    if (this.data.userName != '' && this.data.password != '') {
      this.setData({
        isLogBtnActive: true
      })
    } else {
      this.setData({
        isLogBtnActive: false
      })
    }
  },
  registerName: function (e) {
    this.setData({
      registerName: e.detail.value
    })
    if (this.data.registerName != '' && this.data.messCode != '') {
      this.setData({
        isRegBtnActive: true
      })
    }else{
      this.setData({
        isRegBtnActive: false
      })
    }
  },
  registerPassword:function(e){
    this.setData({
      messCode: e.detail.value
    })
    if (this.data.registerName != '' && this.data.messCode != '') {
      this.setData({
        isRegBtnActive: true
      })
    }else{
      this.setData({
        isRegBtnActive: false
      })
    }
  },
  goLogin:function(){
    console.log('登录登录了')
  },
  goRegister:function(){
    console.log('注册注册')
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})