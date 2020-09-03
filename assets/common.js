var platform = parseInt(getParameter("platform"));
/*
 *  统计
 *  type:统计类型
 */
function statistics(type) {
  $.ajax({
    url: "http://count.kebik.cn/" + type + "?platform=" + platform,
    type: "GET",
    async: false,
    success: function () {},
    error: function (err) {
      console.log(err);
    },
  });
}

/*
 *获取地址栏参数
 *name:参数名
 */
function getParameter(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

//是否微信
function isWX() {
  var ua = navigator.userAgent.toLowerCase();
  //通过正则表达式匹配ua中是否含有MicroMessenger字符串
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}
