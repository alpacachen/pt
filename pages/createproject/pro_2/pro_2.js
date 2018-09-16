// pages/createproject/pro_2/pro_2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:'选择日期',
    time:'，时间',
    datecolor: '#999999',
    timecolor:'#999999',
  },

  bindDatePickerChange:function(e){
    this.setData({
      date: e.detail.value,
      datecolor:'#333333'
    })
  },
  bindTimePickerChange: function (e) {
    this.setData({
      time: e.detail.value,
      timecolor: '#333333'
    })
  },
  submit:function(){
    wx.navigateTo({
      url: '../pro_3/pro_3',
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