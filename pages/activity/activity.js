// pages/activity/activity.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

book: function() {
  const user_id = getApp().globalData.userInfo
  console.log(123,user_id)
  wx.switchTab({
    url: '/pages/profile/profile',
  })
},

  // capacityCounter: function() {
  //   const page = this
  //   const delta = capacity - bookings.length;
  //   return delta
  // },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    const page = this
    const id = options.id
  
    wx.request({
      url: `https://aimy-teaser.herokuapp.com/api/v1/activities/${id}`,
      success: function (res) {
        console.log("READ", res)
        const activity = res.data
        // console.log(activity)
        page.setData(activity)
      }
    })
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})