$(document).ready(function(){
  // スタートボタン
  $(".start").click(function() {
    // 0:0:0:0からスタート
    $(".time").html("0:0:0:0");
    timer = setInterval("countUp()", 100);

    $(this).attr("disabled", "disabled");
    $(".stop").removeAttr("disabled");
  });
  
  // ストップボタン
  $(".stop").click(function() {
    // (一時)停止
    clearInterval(timer);

    $(this).attr("disabled", "disabled");
    $(".start").removeAttr("disabled");
    $(".reset").removeAttr("disabled");
 });
    
 // リセットボタン
  $(".reset").click(function() {
      msec = 0;
      sec  = 0;
      min  = 0;
      hour = 0;

      // 0:0:0:0にリセット
      $(".time").html("0:0:0:0");
      clearInterval(timer);

      $(this).attr("disabled", "disabled");
      $(".stop").attr("disabled","disabled");
      $(".start").removeAttr("disabled");
   });
});

msec = 0;
sec  = 0;
min  = 0;
hour = 0;

function countUp ()
{
    msec += 1;

    if (msec > 9) {
        msec = 0;
        sec += 1;
    }

    if (sec > 59) {
        sec = 0;
        min += 1;
    }

    if (min > 59) {
        min = 0;
        hour += 1;
    }

    // ミリ秒
    msecNumber = msec;

    // 秒
    
    secNumber = sec;
  

    // 分
  
    minNumber = min;
    

    // 時
    
    hourNumber = hour;
    

    // 出力
    $(".time").html(hourNumber + ":" + minNumber + ":" + secNumber + ":" + msecNumber);
}