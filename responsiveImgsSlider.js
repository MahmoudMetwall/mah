// RESPONSIVE SLIDER BUG

var num = 5;
var img = [];

for (var i = 0; i < num; i++) {
  img[i] = document.querySelector('.image' + (i + 1));
}

if (window.innerWidth <= 755) {
  for (var i = 0; i < num; i++)
    img[i].src = "img/Responsive/img (" + (i + 1) + ").jpg";
}

function onSize() {
  if (window.innerWidth <= 755) {
    for (var i = 0; i < num; i++)
      img[i].src = "img/Responsive/img (" + (i + 1) + ").jpg";
  } else {
    for (var i = 0; i < num; i++)
      img[i].src = "img/intro/img (" + (i + 1) + ").jpg";
  }
}