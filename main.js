import './style.css'
import Control from "./control.js";

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideNumber=document.querySelector('.slide-number');
// const activeBullet = document.querySelector('.active-bullet');
const bullets = document.querySelectorAll('.bullet');
bullets.forEach(((bullet, it) => bullet.onclick=()=>scrollSlides(it)))

function scrollSlides(it){
    if(currentSlide < it){
        showSlide('left', it-currentSlide);
    }
    if(currentSlide > it){
        showSlide('right', currentSlide-it);
    }
}

function hideSlide(dur) {
    buttonsDisabled(true);
    slides[currentSlide].classList.add(dur);
    bullets[currentSlide].classList.remove('active-bullet');
    slides[currentSlide].addEventListener('animationend', function(){

        this.classList.remove('active', dur);

    })
}

function buttonsDisabled(disabled) {
    arrowPrev.disabled=disabled;
    arrowNext.disabled=disabled;
}

function changeSlideNumber(){
    const number = currentSlide+1;
    slideNumber.textContent='0' + number;
}


function showSlide(dur, count=1){
    // buttonsDisabled(true);
    if(dur=='left' && currentSlide<4){ //todo magic number

        hideSlide(dur);
        currentSlide = currentSlide + count;
        changeSlideNumber();
        slides[currentSlide].classList.add('next-slide');
        slides[currentSlide].classList.add('from-right');
        slides[currentSlide].addEventListener('animationend', function(){
            this.classList.remove('from-right', 'next-slide');
            this.classList.add('active');
            buttonsDisabled(false);
            bullets[currentSlide].classList.add('active-bullet');
        })
    }
    if(dur=='right' && currentSlide>0){//todo magic number
        hideSlide(dur);
        currentSlide = currentSlide - count;
        changeSlideNumber();
        slides[currentSlide].classList.add('next-slide');
        slides[currentSlide].classList.add('from-left');
        slides[currentSlide].addEventListener('animationend', function(){
            this.classList.remove('from-left', 'next-slide');
            this.classList.add('active');
            buttonsDisabled(false);
            bullets[currentSlide].classList.add('active-bullet');
        })
    }

}

const arrowPrev = document.querySelector('.arrow.prev');
arrowPrev.addEventListener('click', ()=>showSlide('right'))
const arrowNext = document.querySelector('.arrow.next');
arrowNext.addEventListener('click', ()=>showSlide('left'))


