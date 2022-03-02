var gtn = document.getElementById('gtn');
function Toggle(){
    if(gtn.classList.contains("far")){
        gtn.classList.remove("far");
        gtn.classList.add("fas");
    }else {
       gtn.classList.remove("fas");
        gtn.classList.add("far");
}
}


let modal = document.querySelector('.modal');
let modalDtn = document.querySelector('.dtn');
let modalBg = document.querySelector('.modal_bg')

modalDtn.addEventListener('click', function(){
    modal.classList.add('show');
    modalBg.classList.add('show');
});

document.addEventListener('click', function(e){
    let click = e.target.classList.value;
    if (click === 'modal_bg show'){ 
        modal.classList.remove('show');
        modalBg.classList.remove('show');
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
};

let currentScrollPosition = 0;
let scrollAmount = 320;

const sCont = document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");
const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight =  document.querySelector("#btn-scroll-right");


btnScrollLeft.style.opacity = "0";

let maxScroll = -sCont.offsetWidth + hScroll.offsetWidth;

function scrollHorizontally(val) {
    currentScrollPosition += (val * scrollAmount);
    
    if(currentScrollPosition >= 0) {
        currentScrollPosition = 0
        btnScrollLeft.style.opacity = "0";
    }else{
        btnScrollLeft.style.opacity = "1";
    }
    if(currentScrollPosition < maxScroll) {
        currentScrollPosition = maxScroll;
        btnScrollLeft.style.opacity = "0";
    }else{
        btnScrollLeft.style.opacity = "1";
    }
    sCont.style.left = currentScrollPosition + "px";
};