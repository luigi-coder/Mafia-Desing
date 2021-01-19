var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var slide = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("demo");
  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}
  for (i = 0; i < slide.length; i++) {
    slide[i].className = slide[i].className.replace(" activo", "");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activo", "");
  }
  slide[slideIndex-1].className += " activo";
  dots[slideIndex-1].className += " activo";
}


setInterval(plusDivs, 6000, 1);