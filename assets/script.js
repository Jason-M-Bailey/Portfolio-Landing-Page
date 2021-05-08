// hides header and navbar on scroll down, shows on scroll up

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
}


// modal images start
// get the modal
var modal = document.getElementById("myModal");

// get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// when the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
// modal images end 