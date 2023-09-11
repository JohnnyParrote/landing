let offset = 0; //смещение от левого края
const sliderLineImg = document.querySelector ('.slider__line__img');
const burger = document.querySelector ('.burger');
const mobile = document.querySelector ('.navigation__mobile');


document.querySelector('.slider__next__img').addEventListener('click', function(){
    offset = offset + 300; // offset += 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLineImg.style.left = -offset + 'px';
});

document.querySelector('.slider__prev__img').addEventListener('click', function(){
    offset = offset - 300; // offset -= 300;
    if (offset < 0) {
        offset = 900;
    }
    sliderLineImg.style.left = -offset + 'px';
});

burger.onclick = function () {
    burger .classList.toggle('active')
    mobile .classList.toggle('active')
}

