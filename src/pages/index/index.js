// src/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cars: [],
    url: '../detail/detail',
    carCode: ''
  },
  btnSearch:function(e){
    console.log(e.detail.value)
    var carCode = e.detail.value
    wx.showLoading({
      title: '正在查询，请稍候...',
      duration:10000,
    }), 
    wx.request({
      url: 'https://localhost/api/GetIndex/BtnSearch' + '/' + carCode,
        // data:{
        //   carcode: carCode
        // },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideLoading(),
            console.log(JSON.parse(res.data)),
            that.setData({
              cars: JSON.parse(res.data)
            })
        },
        fail: function () {
          console.log('NO')
        }
      })
  },
  // btnSearch:function(){
  //   var that = this
  //   console.log(that.carCode)
    // wx.showLoading({
    //   title: '正在加载...',
    //   duration: 10000
    // }),
    //   wx.request({
    //     url: 'https://localhost/api/GetIndex/BtnSearch',
    //     data:{
    //       carcode:,
    //     },
    //     header: {
    //       'content-type': 'application/json'
    //     },
    //     success: function (res) {
    //       wx.hideLoading(),
    //         console.log(JSON.parse(res.data)),
    //         that.setData({
    //           cars: JSON.parse(res.data)
    //         })
    //     },
    //     fail: function () {
    //       console.log('NO')
    //     }
    //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '正在加载...',
      duration: 10000
    }),
      wx.request({
        url: 'https://localhost/api/GetIndex/GetIndex',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideLoading(),
            console.log(JSON.parse(res.data)),
            that.setData({
              cars: JSON.parse(res.data)
            })
        },
        fail: function () {
          console.log('NO')
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