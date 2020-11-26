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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    console.log(options)
    
    const id = options.activities[data-id]
    const activity = activities.find(activity => activity.id == id)
  
    const page = this
    wx.request({
      url: `https://aimy-teaser.herokuapp.com/api/v1/activities?id=${id}`,
      success: function (res) {
        console.log(res)
        const activity = res.data
        console.log(activity)
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