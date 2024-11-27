
const images = document.querySelectorAll('.slaid');
const gallery = document.querySelector('.gallery');
const awardsLeft = document.querySelector('.awards-left');
const additionalImg = document.querySelector('.additionalImg');

const numberPhotos = 32;
const numberAwards = 11;

const div = document.createElement('div');
div.className = 'showSlides';
const divScrollbar = document.createElement('div');
divScrollbar.className = 'scrollbar';
const miniatures = document.createElement('div');
miniatures.className = 'miniatures';
const awardsSlider = document.createElement('div');
awardsSlider.className = 'awardsSlider';


let indexPhotoSlide = 1;
let indexAwardsSlide = 1

start();

function start(){
    
    

    for (let i = 1; i <= numberPhotos; i++) {
        div.innerHTML += `<div class="slide">
            <div class='numbertext'>${i}/${numberPhotos}</div>
            <img src='assets/images/photo/${i}.jpg'>
        </div>`;
    }
    gallery.appendChild(div);
    
    for (let i = 1; i <= numberPhotos; i++) {
        miniatures.innerHTML +=
            `<div class='demo'>
            <img src='assets/images/photo/${i}.jpg' onclick=currentSlide(this,${i})>
        </div>`;
    }
    divScrollbar.appendChild(miniatures);
    gallery.appendChild(divScrollbar);

    for(let i = 1; i <= numberAwards; i++){
        awardsSlider.innerHTML += 
        `<div class='diploma'>
            <img src='assets/images/diplomas/${i}.jpg'>
        </div>`
    }
    awardsLeft.appendChild(awardsSlider)

    showSlidesPhoto();
    showSlidesAwards();
}

function scrollGalery(element) {
    const widthMiniatures = miniatures.offsetWidth;
    const scrolling = document.querySelector('.scrollbar')
    const left = element.offsetLeft;

    let shift = widthMiniatures / 2 - (left + element.offsetWidth / 2);

    if (left < widthMiniatures / 2) {
        shift = 0;
    }
    if (left > miniatures.scrollWidth - widthMiniatures / 2) {
        shift = -(miniatures.scrollWidth - widthMiniatures);
    }

    scrolling.scrollLeft = -shift;

}

function plusSlidesPhoto(n) {
    indexPhotoSlide += n;
    showSlidesPhoto();
}

function plusSlidesAwards(n) {
    indexAwardsSlide += n;
    showSlidesAwards();
}

function currentSlide(element, n) {
    console.log(n)
    indexPhotoSlide = n;
    scrollGalery(element)
    showSlidesPhoto();
}

function showSlidesPhoto() {
    const demonstrations = document.querySelectorAll('.demo');
    const slides = document.querySelectorAll('.slide');

    if (indexPhotoSlide > slides.length) {
        indexPhotoSlide = 1;
    }
    if (indexPhotoSlide < 1) {
        indexPhotoSlide = slides.length;
    }

    demonstrations.forEach(element => {
        element.classList.remove('active');
    });
    demonstrations[indexPhotoSlide - 1].classList.add('active');

    slides.forEach(element => {
        element.style.display = 'none';
    });
    slides[indexPhotoSlide - 1].style.display = 'block';
    
    scrollGalery(demonstrations[indexPhotoSlide - 1])
}

function showSlidesAwards() {
    const diploma = document.querySelectorAll('.diploma');
    console.log(diploma)

    if(indexAwardsSlide > numberAwards){
        indexAwardsSlide = 1;
    }
    if(indexAwardsSlide < 1){
        indexAwardsSlide = numberAwards;
    }

    diploma.forEach(element => {
        element.style.display = 'none';
    });

    diploma[indexAwardsSlide - 1].style.display = 'block';
    
}

function onClickMerch(ele){
    console.log(ele.offsetTop, additionalImg.offsetLeft - ele.offsetLeft)


    additionalImg.innerHTML = 
    `<img class='selectedMerch' src='${ele.src}'>
    <img  onclick="onClickCross()" class="cross" src="assets/images/arrow/icons8-умножение-100 (1).png" alt="">`;

    additionalImg.classList.toggle('active');

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';

}

function onClickCross(){

    additionalImg.classList.toggle('active')

    document.body.style.overflow = 'scroll';
    document.body.style.paddingRight = '0';
}