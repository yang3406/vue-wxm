(function (doc,win) {
  //获取根节点
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
            if(!clientWidth) return;
        //根据移动端320的宽度适配 font-size
        //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，
        //注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。
        //监听当前窗口的变化，一旦有变化就需要重新设置根字体的值
        docEl.style.fontSize = 20*(clientWidth/320) + 'px';
      }
      if(!doc.addEventListener) return;
      //绑定浏览器缩放与加载时间
      win.addEventListener(resizeEvt,recalc,false);
      //DOMContentLoaded 前者只要dom加载完就会触发 后者所有的DOM，样式表，脚本，图片，flash都已经加载完成才会触发
      doc.addEventListener("DOMContentLoaded",recalc,false);

})(document,window)
