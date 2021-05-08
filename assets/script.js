// hides header and navbar on scroll down, shows on scroll up
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-180px";
  }
  prevScrollpos = currentScrollPos;
};

// light box start
// initialize here and run showSlide() to give your lightbox a default state.
let slideIndex = 1;
showSlide(slideIndex);
// provide functionality for clickable content
function openLightbox() {
  document.getElementById("Lightbox").style.display = "block";
}
function closeLightbox() {
  document.getElementById("Lightbox").style.display = "none";
}

// assign new values here to slidIndex
function changeSlide(n) {
  showSlide((slideIndex += n));
}

function toSlide(n) {
  showSlide((slideIndex = n));
}

// logic for the light box, decides which slide to show and which dot is active.

function showSlide(n) {
  const slides = document.getElementsByClassName("slide");
  let modalPreviews = document.getElementsByClassName("modal-preview");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < modalPreviews.length; i++) {
    modalPreviews[i].className = modalPreviews[i].className.replace(
      " active",
      ""
    );
  }

  slides[slideIndex - 1].style.display = "block";
  modalPreviews[slideIndex - 1].className += " active";
}

// light box end