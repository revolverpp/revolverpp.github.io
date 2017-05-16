var page = 0;

window.onload = function() {
  var div = document.createElement("div");
  div.style.width = window.innerWidth;
  div.style.height = window.innerHeight;
  document.body.appendChild(div);
}

window.onscroll = function() {
  console.log(document.body.scrollTop);
}
