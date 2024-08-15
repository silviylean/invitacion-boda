function playMusic() {
  document.getElementById('music').play();
  document.getElementById('popup').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

function noMusic() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('loader').style.display = 'none';
  document.getElementById('content').style.display = 'block';
}

window.onload = function() {
  document.getElementById('loader').style.display = 'block';
  document.getElementById('content').style.display = 'none';
}
