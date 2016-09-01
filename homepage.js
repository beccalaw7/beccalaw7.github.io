function showDropDown(id) {
  document.getElementById(id).style.display= "block";
  var text = document.getElementById("text");
  text.className = "text-down";

  var images = document.getElementById("images");
  images.className = "images-down";
}

function hideDropDown(id) {
  document.getElementById(id).style.display= "none";
  var text = document.getElementById("text");
  text.className = "text";

  var images = document.getElementById("images");
  images.style.position = "";
  images.className = "images";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
