// pages/stories/stories.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    stories: [],
    title: 'stories'
  },

  changeTitle() {
    this.setData({
      title: 'Love stories',
    })

    wx.setStorageSync('story-title', 'love stories')
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      title: wx.getStorageSync('story-title')
    });
    this.setData({
      stories: app.globalData.stories
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
    this.setData({
      stories: app.globalData.stories,
      title: wx.getStorageSync('story-title') || 
'Stories'
    });
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