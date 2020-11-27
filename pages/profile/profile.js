// pages/profile/profile.js
Page({
  data: { 
    button: "Cancel"
  },

  onLoad: function (options) {
    // const id = getApp().globalData.userInfo.id
    const id = 34
    const path = `${getApp().globalData.host}api/v1/users/${id}`
    const page = this
    wx.request({
      url: path,
      success(res) {
        console.log('got data?', res)
        page.setData(res.data)
      }
    })
  },

  onShow: function () {

  },
  
  changeData: function() {
    this.setData({
      button: "Confirm?"
    })
  }
})

