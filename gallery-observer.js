
// function createImg(src, alt){
//     const img = document.createElement('img');
//     img.src = src;
//     img.alt = alt;
//     return img;
// }
//
// function shuffle(arr){
//
// }
//
const container = document.querySelector('.flex-3');
//
// const galleryImages = []
// for (let i = 1; i < 16; i++) {
//     const img = `./assets/img/gallery/galery${i}.jpg`;
//     galleryImages.push(img)
// }
//
// galleryImages.map(it => {
//     const img= createImg(it, 'gallery picture');
//     container.appendChild(img);
// });


//------------------
const shuffleImages = document.querySelectorAll('.shuffle-image');

console.log(shuffleImages)

const callback = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('Пользователь почти докрутил до gallery!')

            shuffleImages.forEach(item => {

                item.style.opacity='0.5';

                // console.log('Пользователь почти докрутил до gallery!')

            })
            observer.unobserve(entry.target)
        }
    })
}

const options = {
    // root: по умолчанию window,
    // но можно задать любой элемент-контейнер
    rootMargin: '0px 0px 25px 0px',
    threshold: 0,
}

const observer = new IntersectionObserver(callback, options)
observer.observe(container)
//lazyImages.forEach((image) => observer.observe(image))
//-----------------------------------------------------

export default observer
//export default container;