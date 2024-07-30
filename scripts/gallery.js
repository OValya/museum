
function createImg(src, alt){
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    return img;
}
//
// function shuffle(arr){
//
// }
//
const container = document.querySelector('.flex-3');

const galleryImages = []

// function getImageUrl(name) {
//     return new URL(`./${name}`, import.meta.url).href
// }

for (let i = 1; i < 16; i++) {
    const img = `/museum/gallery/galery${i}.jpg`;
    galleryImages.push(img)
}

galleryImages.map(it => {
    const img= createImg(it, 'gallery picture');
    container.appendChild(img);
});




//export default container;