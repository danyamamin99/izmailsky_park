// Массив img и кнопки первого блока - Окружение
let environmentImg = document.querySelectorAll('.environmentImgSlide'),
    prevBtnEnv = document.getElementById('environmentPrev'),
    nextBtnEnv = document.getElementById('environmentNext');

// Массив img и кнопки второго блока Двор
let yardImg = document.querySelectorAll('.yardImgSlide'),
    prevBtnYard = document.getElementById('yardPrev'),
    nextBtnYard = document.getElementById('yardNext');

let roomImg = document.querySelectorAll('.roomImgSlide'),
    prevBtnRoom = document.getElementById('roomPrev'),
    nextBtnRoom = document.getElementById('roomNext');

// Экземпляры класса для слайдера
let envSlider = new Slider(environmentImg),
    yardSlider = new Slider(yardImg),
    roomSlider = new Slider(roomImg);

// События для кнопок
prevBtnEnv.addEventListener('click', envSlider.prevSlide.bind(envSlider));
nextBtnEnv.addEventListener('click', envSlider.nextSlide.bind(envSlider));

prevBtnYard.addEventListener('click', yardSlider.prevSlide.bind(yardSlider));
nextBtnYard.addEventListener('click', yardSlider.nextSlide.bind(yardSlider));

prevBtnRoom.addEventListener('click', roomSlider.prevSlide.bind(roomSlider));
nextBtnRoom.addEventListener('click', roomSlider.nextSlide.bind(roomSlider));


