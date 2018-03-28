var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'
function padding (s, len) {
  var len = len - (s + '').length
  for (var i = 0; i < len; i++) { s = '0' + s }
  return s
};

export default {
  getQueryStringByName: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    var context = ''
    if (r != null) { context = r[2] }
    reg = null
    r = null
    return context == null || context == '' || context == 'undefined' ? '' : context
  },
  formatDate: {
    format: function (date, pattern) { // Date类型转为String类型
      pattern = pattern || DEFAULT_PATTERN
      if (date == '') {
        return ''
      }
      return pattern.replace(SIGN_REGEXP, function ($0) {
        switch ($0.charAt(0)) {
          case 'y': return padding(date.getFullYear(), $0.length)
          case 'M': return padding(date.getMonth() + 1, $0.length)
          case 'd': return padding(date.getDate(), $0.length)
          case 'w': return date.getDay() + 1
          case 'h': return padding(date.getHours(), $0.length)
          case 'm': return padding(date.getMinutes(), $0.length)
          case 's': return padding(date.getSeconds(), $0.length)
        }
      })
    },
    parse: function (dateString, pattern) { // String类型转为Date类型
      var matchs1 = pattern.match(SIGN_REGEXP)
      var matchs2 = dateString.match(/(\d)+/g)
      if (matchs1.length == matchs2.length) {
        var _date = new Date(1970, 0, 1)
        for (var i = 0; i < matchs1.length; i++) {
          var _int = parseInt(matchs2[i])
          var sign = matchs1[i]
          switch (sign.charAt(0)) {
            case 'y': _date.setFullYear(_int); break
            case 'M': _date.setMonth(_int - 1); break
            case 'd': _date.setDate(_int); break
            case 'h': _date.setHours(_int); break
            case 'm': _date.setMinutes(_int); break
            case 's': _date.setSeconds(_int); break
          }
        }
        return _date
      }
      return null
    },
    timestamp: function (timestamp) { // 时间戳转日期string
      if (timestamp.toString().length == 10) {
        timestamp = timestamp * 1000
      }
      var newDate = new Date()
      newDate.setTime(timestamp)
      return this.format(newDate, 'yyyy-MM-dd hh:mm:ss')
    },
    timestampType: function (timestamp,type) { // 时间戳转指定日期格式的string》type='yyyy-MM-dd hh:mm:ss'
      if (timestamp.toString().length == 10) {
        timestamp = timestamp * 1000
      }
      var newDate = new Date()
      newDate.setTime(timestamp)
      return this.format(newDate, type)
    },
    dateTimestamp: function (date) { // 日期Date转时间戳
      if (timestamp.toString().length == 10) {
        timestamp = timestamp * 1000
      }
      var newDate = new Date()
      newDate.setTime(timestamp)
      return this.format(newDate, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  dateFormat: function(date){
      // 当天时间转化为 20171019格式
      var newDate = new Date(date);
      var year = newDate.getFullYear();
      var month = newDate.getMonth()+1;
      var day = newDate.getDate();
      // 补零
      if(Number(month) < 10){
          month = '0' + month.toString();
      }
      if(Number(day) < 10){
          day = '0' + day.toString();
      }
      return year.toString() + month.toString() + day.toString();
  },
    /**
     * 日期比较大小
     * compareDateString大于dateString，返回1；
     * 等于返回0；
     * compareDateString小于dateString，返回-1
     * @param dateString 日期
     * @param compareDateString 比较的日期
     */
  dateCompare: function (dateString, compareDateString) {
    if (dateString == '') {
      return
    }
    if (compareDateString == '') {
      return
    }
    var dateTime = dateString.getTime()
    var compareDateTime = compareDateString.getTime()
    if (compareDateTime > dateTime) {
      return 1
    } else if (compareDateTime == dateTime) {
      return 0
    } else {
      return -1
    }
  },
    /**
     * 获取日期相差的天数
     * compareDateString大于dateString，返回正数，相差的天数；
     * 等于返回0；
     * compareDateString小于dateString，返回负数，相差的天数
     * @param dateString 日期
     * @param compareDateString 比较的日期
     */
  getDateDiffDays: function (compareDateString, dateString) {
    if (dateString == '') {
      return
    }
    if (compareDateString == '') {
      return
    }
    var dateTime = dateString.getTime()
    var compareDateTime = compareDateString.getTime()
    var compareResult = compareDateString - dateString
    var diffDays = parseInt(Math.abs(compareResult) / 3600 / 24000)
    if (compareResult > 0) {
      return diffDays
    } else {
      return -diffDays
    }
  },

    /**
     * 获取日期相差的秒数
     * 返回正数，相差的秒数；
     * 等于返回0；
     * @param endDate 结束 秒数
     * @param startDate 开始的秒数
     */
  getDateDiffSeconds: function (startDate, endDate) {
    if (endDate == '') {
      return
    }
    if (startDate == '') {
      return
    }
    var dateTime = endDate.getTime()
    var compareDateTime = startDate.getTime()
    var compareResult = endDate - startDate
    var diffDays = parseInt(Math.abs(compareResult) / 1000)
    if (compareResult > 0) {
      return diffDays
    } else {
      return -diffDays
    }
  },

  formatSeconds: function (value) { // 将秒数换成时分秒格式
    var theTime = parseInt(value / 1000)// 秒
    var theTime1 = 0// 分
    var theTime2 = 0// 小时
    if (theTime > 60) {
      theTime1 = parseInt(theTime / 60)
      theTime = parseInt(theTime % 60)
      if (theTime1 > 60) {
        theTime2 = parseInt(theTime1 / 60)
        theTime1 = parseInt(theTime1 % 60)
      }
    }
    var result = '' + parseInt(theTime) + '秒'
    if (theTime1 > 0) {
      result = '' + parseInt(theTime1) + '分' + result
    }
    if (theTime2 > 0) {
      result = '' + parseInt(theTime2) + '小时' + result
    }
    return result
  },
  // 根据不同的url区别不同平台
  getPlatformByUrl: function(url){
      var obj = {}
      if(url.indexOf('rong.ncnews.com.cn') != -1){
          obj.add = 'nanchang';
          obj.top = 'NCJTT'
          obj.cnName = '南昌头条'
          return obj // 南昌头条
      }else if(url.indexOf('rong.hebei.com.cn') != -1){
          obj.add = 'hebei';
          obj.top = 'HBJTT'
          obj.cnName = '河北头条'
          return obj // 河北头条
      }else if(url.indexOf('rong.jiangsutoutiao.com') != -1){
          obj.add = 'jiangsu';
          obj.top = 'JSSTT'
          obj.cnName = '江苏头条'
          return obj // 江苏头条
      }else if(url.indexOf('rong.xkb.com.cn') != -1){
          obj.add = 'guangdong';
          obj.top = 'GDYTT'
          obj.cnName = '广东头条'
          return obj // 广东头条
      }else if(url.indexOf('rong.gscn.com.cn') != -1){
          obj.add = 'gansu';
          obj.top = 'GSGTT'
          obj.cnName = '甘肃头条'
          return obj // 甘肃头条
      }else if(url.indexOf('rong.gog.cn') != -1){
          obj.add = 'guizhou';
          obj.top = 'GZGTT'
          obj.cnName = '贵州头条'
          return obj// 贵州头条
      }else if(url.indexOf('rong.dbw.cn') != -1){
          obj.add = 'heilongjiang';
          obj.top = 'DBHTT'
          obj.cnName = '东北头条'
          return obj // 东北头条
      }else if(url.indexOf('rong.uschinapress.com') != -1){
          obj.add = 'america';
          obj.top = 'USATT'
          obj.cnName = '美国头条'
          return obj // 美国头条
      }else if(url.indexOf('rong.headlinehk.com') != -1){
          obj.add = 'xianggang';
          obj.top = 'XGGTT'
          obj.cnName = '香港头条'
          return obj // 香港头条
      }else if(url.indexOf('rong.yzwb.net') != -1){
          obj.add = 'yangzi';
          obj.top = 'YZSTT'
          obj.cnName = '扬子头条'
          return obj  // 扬子头条
      }else if(url.indexOf('rong.hinews.cn') != -1){
          obj.add = 'hainan';
          obj.top = 'HBJTT'
          obj.cnName = '河北头条'
          return obj  // 河北头条
      }else{
          obj.add = 'toutiao';
          obj.top = 'DFTT'
          obj.cnName = '东方头条'
          return obj   // 其他默认头条
      }
  }

}
