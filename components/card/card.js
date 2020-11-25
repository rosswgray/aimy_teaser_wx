// components/card.js
Component({
  /**
   * Component properties
   */
  properties: {
    isInstructor: { type: Boolean, value: false },
    activity: { type: Object, value: {} }
  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    goToShow: function(event) {
      const id = event.currentTarget.dataset.id
      console.log(id)
      wx.navigateTo({
        url: `/pages/activity/activity?id=${id}`,
      })
    },
  }
})
