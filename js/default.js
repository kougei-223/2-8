for(var i = 1; i < 10; i++){
  var li = document.createElement('li');
  li.textComent = 'アイテム';
  document.getElementById('list').appendChild(li);
}

var HP=100;
while(0 < HP){
  var li = document.createElement('li');
  var damage = Math.floor(Math.random() * 100);
  HP -= damage;
  HP = (HP < 0) ? 0:HP;
  li.textComent = damage + 'のダメージを受けた。残りのHP:' + HP;
  document.getElementById('while').appendChild(li);
}
