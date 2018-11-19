var searate_time = function(time){
  var sec   = time.getSeconds();
  var min   = time.getMinutes();
  var hours = time.getHours();
  var days  = time.getDate();
  var month = time.getMonth();
  var year  = time.getFullYear();
  return[sec, min, hours, days, month,year];
}

var update = function(){
  var now = new Date();
  var counter = separate_time(now);
  document.getElementById('contdown').textContent =
    '現在時刻は' +
    counter[5] + '年' +
    counter[4] + '月' +
    counter[3] + '日' +
    counter[2] + '時' +
    counter[1] + '分' +
    counter[0] + '秒'
  refuresh();
}

var refuresh= function(){
  setTimeout(update, 1000);//タイマーを起動
}
update();

document.getElementById('form').select.onchange =function(){
  location.href = document.getElementById('form').select.value;
}
