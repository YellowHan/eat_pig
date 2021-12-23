let count = 0;
document.getElementById('pig').onclick = function() {
  document.getElementById('pig').style.display = "none";
  document.getElementById('eat_pig').style.display = "block";
  setTimeout(function() {
  document.getElementById('pig').style.display = "block";
  },500);
  ++count;
  document.getElementById('count').innerText = count;
  console.log(count);
}