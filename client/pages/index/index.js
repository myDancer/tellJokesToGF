//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
    data: {
      currentTab: 0
    },
    swichNav: function (e) {
      if (this.data.currentTab === e.target.dataset.current) {
        return false
      } else {
        this.setData({
          currentTab: e.target.dataset.current
        })
      }
    }
})
