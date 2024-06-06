import './style.css'
import gallery from "./gallery.js";

//--------WELCOME
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

//-------------WELCOME end

//-----VIDEO
const playRange = document.querySelector('.play-progress');
const volumeRange = document.querySelector('.volume-progress');

const volume= document.querySelector('.volume');
const fullscreen = document.querySelector('.full');
const play = document.querySelector('.play');

// function toggle(el, firstCl, secondCl){
//     if(el.classList.contains(firstCl)){
//         el.classList.remove(firstCl)
//         el.classList.add(secondCl)
//     }else {
//         el.classList.remove(secondCl)
//         el.classList.add(firstCl)
//     }
// }

play.addEventListener('click', ()=>{
   // toggle(play, 'play', 'pause')
    play.classList.toggle('pause');
    for (let i = 0; i < frames.length; i++) {
        frames[i].postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*')
    }
})

volume.addEventListener('click', ()=>{
    volume.classList.toggle('mute');
})

fullscreen.addEventListener('click', ()=>{
    fullscreen.classList.toggle('min-screen');
})

function calcProgress(event, max){
    const value = event.target.value;
    return (value / max) * 100
}

playRange.style.background = `linear-gradient(to right, #710707 50%, #ccc 50%)`;
volumeRange.style.background = `linear-gradient(to right, #710707 50%, #ccc 50%)`;

playRange.addEventListener('input', e => {
    const progress = calcProgress(e, playRange.max);
    playRange.style.background = `linear-gradient(to right, #710707 ${progress}%, #ccc ${progress}%)`;
})

volumeRange.addEventListener('input', e => {
    const progress = calcProgress(e, volumeRange.max);
    volumeRange.style.background = `linear-gradient(to right, #710707 ${progress}%, #ccc ${progress}%)`;
})



const iframeContainer = document.querySelector('.video-slide__container');
function createFrame(srcDoc, src){
    const frame = document.createElement('iframe');
    frame.srcdoc = srcDoc;
    frame.width='452'
    frame.height='254';
    frame.loading='lazy';
    frame.allowFullscreen=true;
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    frame.referrerpolicy='strict-origin-when-cross-origin'
    return frame;
}
const iframeData = [
    {
        img: './assets/video/poster0.jpg',
        link: "https://www.youtube.com/embed/Vi5D6FKhRmo?autoplay=1&mute=1&si=ttxrEYDeR6xOHy-j&enablejsapi=1"
    },
    {
        img: './assets/video/poster1.jpg',
        link:  'https://www.youtube.com/embed/zp1BXPX8jcU?autoplay=1&mute=1&si=cCIlmtrksx1PTrtn&enablejsapi=1'
    },
    {
        img: './assets/video/poster2.jpg',
        link: 'https://www.youtube.com/embed/NOhDysLnTvY?autoplay=1&mute=1&si=W_xV3pTHPFWetomC&enablejsapi=1'
    },
    {
        img: './assets/video/poster3.jpg',
        link: 'https://www.youtube.com/embed/aWmJ5DgyWPI?autoplay=1&mute=1&si=SADA7qh4w4Z7u70G&enablejsapi=1'
    },
    {
        img: './assets/video/poster4.jpg',
        link: 'https://www.youtube.com/embed/2OR0OCr6uRE?autoplay=1&mute=1&si=KnCyZFHZP4UP9NIg&enablejsapi=1'
    }
]
const srcDocs = [];
iframeData.map(data =>{
    const srcDoc = `<style>
                            *{overflow: hidden;padding:0;margin:0;}
                            html,body{height:100%; transition: transform .5s;}
                            span, img{position:absolute;width:100%;top:0;bottom:0;margin:auto}
                            span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                            html:hover span{color: darkgoldenrod}
                            html:hover img{transform: scale(1.1); transition: transform .5s;}
                            </style>
                            <a href= ${data.link}>
                            <img src=${data.img} alt='Video youtube' width='452'>
                            <span>▶</span>
                        </a>`;
    srcDocs.push(srcDoc)
}
    
)
for (let i = 0; i < srcDocs.length; i++) {
    const iframe = createFrame(srcDocs[i], iframeData[i].link);
    iframeContainer.append(iframe)
}

const frames = window.frames;

for (let i = 0; i < frames.length; i++) {
    frames[i].postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*')
}
// frames.(fr => fr.contentWindow.postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*'))
// console.log(frames)

//explore
const sliderRange = document.querySelector(".slider-range")
const beforeImage = document.querySelector(".img-before")
const sliderLine = document.querySelector(".slider-thumb")


sliderRange.addEventListener('input', (e)=>{
    let value = e.target.value + '%';
    beforeImage.style.width=value;
    sliderLine.style.left = value;
    }
)


//contacts
mapboxgl.accessToken = 'pk.eyJ1IjoidmFseWExOTg2IiwiYSI6ImNsd3FldW9scTAxMHUyaXM5ZGxvMnFlM3IifQ.m2fJStbAbwQPn-fyMLsW4w';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/valya1986/cku5puds62tr418o7lnkicmip',
    center: [2.336368, 48.861019],
    zoom: 16
});


//booking form

const form = document.querySelector('.form-tickets');
const incBasic = document.querySelector('.increment.basic');
const incSenior = document.querySelector('.increment.senior');
const decBasic = document.querySelector('.decrement.basic');
const decSenior = document.querySelector('.decrement.senior');
const calcTotal = document.querySelector('.calc-total');
const inputBasic = document.getElementById('basic');
const inputSenior = document.getElementById('senior');


function increment(input){
    if(input.value < 99)  input.value = +input.value + 1;
}

function decrement(input){
    if (input.value > 0){
        input.value = +input.value - 1;
    }
}

function check(input) {
    if(input.value > 99)  input.value = 99;
    if(input.value < 0)  input.value = 0;
}

function calculateTotalPrice(countBasic, countSenior){
    return countBasic * 20 + countSenior * 10;
}

inputBasic.oninput = () => {check(inputBasic); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}
inputSenior.oninput = () => {check(inputSenior); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}

incBasic.onclick = () => {increment(inputBasic); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}
decBasic.onclick = () => {decrement(inputBasic); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}

incSenior.onclick = () => {increment(inputSenior); calcTotal.textContent= calculateTotalPrice(inputBasic.value, inputSenior.value)}
decSenior.onclick = () => {decrement(inputSenior); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}


const dataForm = (form) => {
    return new FormData(form)
}


const dialogBooking = document.getElementById('booking');
const formBooking = document.querySelector('.booking-content');
const overviewDataType = document.querySelector('.data-type');
const types = {'permanent': 'Permanent exhibition', 'temporary': 'Temporary exhibition', 'combined': 'Combined admission'};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = dataForm(form)
   //console.log(Array.from(data.entries()));
    formBooking.type_ticket.value =  data.get('type_ticket');
    //console.log( types[data.get('type_ticket')] );
    overviewDataType.textContent = types[data.get('type_ticket').toString()];
    formBooking.booking_senior.value = data.get('senior');
    formBooking.booking_basic.value = data.get('basic');

    dialogBooking.showModal();
})
dialogBooking.addEventListener('click', ({target, currentTarget})=>{
    if(target===currentTarget) dialogBooking.close()
})




//burger

const burger = document.querySelector('.burger')
const sideMenu = document.querySelector('.nav')
burger.addEventListener('click', ()=>{
    if(burger.classList.contains('show-menu')) {
        hideSideMenu()
    } else{
        burger.classList.add('show-menu');
        sideMenu.classList.add('show-menu')
    }
})

function hideSideMenu(){
        burger.classList.remove('show-menu');
        sideMenu.classList.remove('show-menu')
}

window.addEventListener('scroll', hideSideMenu);


//
