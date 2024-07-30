const playRange = document.querySelector('.play-progress');
const volumeRange = document.querySelector('.volume-progress');

const volume= document.querySelector('.volume');
const fullscreen = document.querySelector('.full');
const play = document.querySelector('.play');


play.addEventListener('click', ()=>{
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
const iframePlayer = document.querySelector('.video-player');
function createFrame( link, img, width='452', height='254',){
    const frame = document.createElement('iframe');
    frame.srcdoc = `<style>
                            *{overflow: hidden;padding:0;margin:0;}
                            html,body{height:100%; transition: transform .5s;}
                            span, img{position:absolute;width:100%;top:0;bottom:0;margin:auto; transition: transform .5s;}
                            span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
                            html:hover span{color: darkgoldenrod}
                            html:hover img{transform: scale(1.1); transition: transform .5s;}
                            </style>
                            <a href= ${link}>
                            <img src=${img} alt='Video youtube' width='452'>
                            <span>▶</span>
                        </a>`;
    frame.width=width;
    frame.height=height;
    frame.loading='lazy';
    frame.allowFullscreen=true;
    frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    frame.referrerpolicy='strict-origin-when-cross-origin'
    return frame;
}
const iframeData = [

    {
        img: '/museum/video/poster1.jpg',
        link:  'https://www.youtube.com/embed/zp1BXPX8jcU?controls=0&autoplay=1&mute=1&si=cCIlmtrksx1PTrtn&enablejsapi=1'
    },
    {
        img: '/museum/video/poster2.jpg',
        link: 'https://www.youtube.com/embed/NOhDysLnTvY?controls=0&autoplay=1&mute=1&si=W_xV3pTHPFWetomC&enablejsapi=1'
    },
    {
        img: '/museum/video/poster3.jpg',
        link: 'https://www.youtube.com/embed/aWmJ5DgyWPI?controls=0&autoplay=1&mute=1&si=SADA7qh4w4Z7u70G&enablejsapi=1'
    },
    {
        img: '/museum/video/poster4.jpg',
        link: 'https://www.youtube.com/embed/2OR0OCr6uRE?autoplay=1&mute=1&si=KnCyZFHZP4UP9NIg&enablejsapi=1'
    },
    {
        img: '/museum/video/poster0.jpg',
        link: "https://www.youtube.com/embed/Vi5D6FKhRmo?autoplay=1&mute=1&si=ttxrEYDeR6xOHy-j&enablejsapi=1"
    }
]


iframeData.forEach(it => {

    iframeContainer.append(createFrame(it.link, it.img));
    iframePlayer.append(createFrame(it.link, it.img, '1440px', '650px'))

})



const frames = window.frames;

for (let i = 0; i < frames.length; i++) {
    frames[i].postMessage( '{"event":"command", "func":"pauseVideo", "args":""}', '*')
}