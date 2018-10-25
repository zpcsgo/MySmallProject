//logs.js

const util = require('../../utils/util.js');
let wxparse = require("../../wxParse/wxParse.js");
var zpc = require("../../utils/wxcharts-min.js");
var pieChart = null;
Page({
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wxparse.wxParse('html', 'html', "<h1>你好</h1><img src='https://www.baidu.com/img/xinshouye_4b9ddd3c9fee924e28ac8b9d35908bd4.png'>", this, 0);
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    pieChart = new zpc({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '成交量1',
        data: 15,
        color:"#0066CC"
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }, {
        name: '成交量4',
        data: 63,
          color:"#009933"
      }, {
        name: '成交量5',
        data: 35,
      }, {
        name: '成交量6',
        data: 78,
          color:"#CC0066"
      }, {
        name: '成交量7',
        data: 63,
          color:"#66FF66"
      }, {
        name: '成交量8',
        data: 35,
      }, {
        name: '成交量9',
        data: 78,
          color:"#CC0033"
      }, {
        name: '成交量10',
        data: 78,
      }],
      width: windowWidth,
      height: 400,
      dataLabel: true,
    });

  },
})
