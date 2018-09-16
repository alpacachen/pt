// pages/createproject/pro_3/pro_3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  todetail:function(){
    wx.navigateTo({
      url: '../../detail/detail?id=1234',
    })
  },
  edit:function(){
    wx.navigateTo({
      url: '../pro_2/pro_2?id=1234',
    })
  },
  getimg:function(url){
    wx.downloadFile({
      url:url,
      success:function(res){
        console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success:function(res){
            console.log(res)
          }
        })
      }
    })
  },
  saveimg: function() {
    let that = this
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success() {
              that.getimg('http://cdn-app.zdpvt.com/public/5ac884e54bf25d67e9197597/349d16615688f4d15edbcf07bf7cf334.png!raw')
            }
          })
        } else {
          that.getimg('http://cdn-app.zdpvt.com/public/5ac884e54bf25d67e9197597/349d16615688f4d15edbcf07bf7cf334.png!raw')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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