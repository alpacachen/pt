// pages/createpro_1/createpro_1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img1_text: '点击上传封面',
    img2_text: '点击上传工作室环境',
    img3_text: '点击上传师资介绍',
    img4_text:'点击上传学院风采',
  },

  next:function(){
    wx.navigateTo({
      url: '../pro_2/pro_2',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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