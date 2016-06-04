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
