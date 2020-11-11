var openBTN = document.querySelector('#open');// selects element with id of open
var closeBTN = document.querySelector('#close');//selects element with id of close

var buttons = document.querySelectorAll('.menuBTN');//selects all elements with a class of menuBTN

//foreach cycles through all buttons selected above
buttons.forEach(button => {
    //listens for click events on each button
    button.addEventListener('click', (e) => {
        openBTN.classList.toggle('hide');//toggles hide class on open 
        closeBTN.classList.toggle('hide');//toggles hide class on close
    })
});


//website page slideshow

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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





