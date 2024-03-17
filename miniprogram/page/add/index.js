// page/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: "shelf-life",
        name: "保质期"
      },
      {
        id: "production-date",
        name: "生产日期"
      },
      {
        id: "storage",
        name: "库存"
      },
      {
        id: "open-date",
        name: "开封日期"
      },
      {
        id: "open-shelf-life",
        name: "开封保质期"
      }
    ],
    tagList: [
      {
        id: "add-label",
        name: "添加标签"
      },
      {
        id: "storage-position",
        name: "收纳位置"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})