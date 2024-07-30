const sliderRange = document.querySelector(".slider-range")
const beforeImage = document.querySelector(".img-before")
const sliderLine = document.querySelector(".slider-thumb")


sliderRange.addEventListener('input', (e)=>{
        let value = e.target.value + '%';
        beforeImage.style.width=value;
        sliderLine.style.left = value;
    }
)