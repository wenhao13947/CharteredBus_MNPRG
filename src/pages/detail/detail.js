// src/pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    table:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.jobId)
    wx.showLoading({
      title: '正在加载...',
      duration:10000
    })
    var that = this;
    wx.request({
      url: 'https://localhost/api/GetIndex/GetTableById/'+options.jobId,
      'content-type':'application/json',
      success:function(res){
        console.log(JSON.parse(res.data))
        wx.hideLoading()
        that.setData({ table: JSON.parse(res.data)})
      },
      fail:function(res){
        console.log(res.data)
      }
    })
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