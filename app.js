//app.js
App({
  // goToShow: function(event) {
  //   const id = event.currentTarget.dataset.id
  //   console.log(id)
  //   navigateTo({
  //     url: `pages/activity/activity?id=${id}`,
  //   })
  // },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    const host = this.globalData.host
    console.log('beginning login')
    wx.login({
      success: (res) => {
      console.log(res)
      // insert next code here
      wx.request({
        url: host + 'login',
        method: 'post',
        data: {
          code: res.code
        },
      // insert next code here
      success: (res) => {
        console.log('logged in', res)
        this.globalData.userInfo = res.data.user
        console.log(111,this.globalData)
      }
      })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    host: 'https://aimy-teaser.herokuapp.com/',
    // host: 'http://localhost:3000/',
  }
})