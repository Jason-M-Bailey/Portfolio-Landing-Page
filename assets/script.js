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

/*
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
*/

// light box start 
// Initialize here and run showSlide() to give your lightbox a default state.
let slideIndex = 1;
showSlide(slideIndex);
// You are providing the functionality for your clickable content, which is 
// your previews, dots, controls and the close button.
function openLightbox() {
  document.getElementById('Lightbox').style.display = 'block';
}
function closeLightbox() {
  document.getElementById('Lightbox').style.display = 'none';
};

// Note that you are assigning new values here to our slidIndex.

function changeSlide(n) {
  showSlide(slideIndex += n);
};

function toSlide(n) {
  showSlide(slideIndex = n);
};

// This is your logic for the light box. It will decide which slide to show 
// and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName('slide');
  let modalPreviews = document.getElementsByClassName('modal-preview');

  if (n > slides.length) {
    slideIndex = 1;	
  };
  
  if (n < 1) {
    slideIndex = slides.length;
  };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  };
  
  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
  };
  
  slides[slideIndex - 1].style.display = 'block';
  modalPreviews[slideIndex - 1].className += ' active';
};

// light box end