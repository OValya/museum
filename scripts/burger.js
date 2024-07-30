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
