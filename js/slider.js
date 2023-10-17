var mLogo = "";
for (let i = 1; i < 8; i++) {
mLogo +='<div class="mySlides fade" style="display: none;"><img src="images/header-bg'+i+'.jpg" style="width:100%"></div>';
}
document.getElementById("mLogo").innerHTML = mLogo;
let slideIndex = 0;
showSlides();
function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 5000);
}

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
mybutton.style.display = "block";
} else { mybutton.style.display = "none"; }
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}