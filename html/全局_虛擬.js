// Generated by CoffeeScript 2.3.2
(function() {
  $(function() {
    var 縮放調整;
    if (typeof 虛擬核心已加載 === "undefined") {
      alert('無法加載虛擬核心。');
    }
    縮放調整 = function() {
      var a, b, t;
      a = document.body.clientWidth / 解析度[0];
      b = document.body.clientHeight / 解析度[1];
      t = Math.min(a, b);
      $('#總畫面 , #墊底').css({
        "transform-origin": "0% 0%",
        "transform": "scale(" + t + ")"
      });
      return setTimeout(縮放調整, 200);
    };
    縮放調整();
    $('title').html(作品名);
    return 山彥.初始化();
  });

  window.山彥 = {
    n: 0,
    更新: function() {
      return 演出.改變演出狀態(演出步[this.n]);
    },
    步進: function() {
      return this.n += 1;
    },
    步進更新: function() {
      this.步進();
      return this.更新();
    },
    設置: function() {
      return 0;
    },
    初始化: function() {
      演出.配置({解析度, 邊界, 主題css, 自定css, 圖片文件夾, 音樂文件夾, 視頻文件夾});
      return 演出.準備工作();
    }
  };

}).call(this);
