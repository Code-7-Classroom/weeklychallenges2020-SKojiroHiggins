var slideIndex = 1;
showSlides(slideIndex);

// Next and previous 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("slideshow__slide");
    if (n > slides.length) { // Starts from the beginning after the last img
        slideIndex = 1
    }
    if (n < 1) { // Shows end img when going to a previous img from the 1st
        slideIndex = slides.length
    }
    for (var i = 0; i < slides.length; i++) { // All imgs set to display: none
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block"; // Displays one img
}

