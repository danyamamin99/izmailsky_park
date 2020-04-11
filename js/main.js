// Массив img и кнопки первого блока - Окружение
let environmentImg = document.querySelectorAll('.environmentImgSlide'),
    prevBtnEnv = document.getElementById('environmentPrev'),
    nextBtnEnv = document.getElementById('environmentNext');

// Массив img и кнопки второго блока - Двор
let yardImg = document.querySelectorAll('.yardImgSlide'),
    prevBtnYard = document.getElementById('yardPrev'),
    nextBtnYard = document.getElementById('yardNext');
// Массив img и кнопки третьего блока - Квартира
let roomImg = document.querySelectorAll('.roomImgSlide'),
    prevBtnRoom = document.getElementById('roomPrev'),
    nextBtnRoom = document.getElementById('roomNext');
// Массив img и кнопки четвертого блока - Панорамнон остекление
let panoramImg = document.querySelectorAll('.glazing__wrap__slide'),
    prevBtnPanoram = document.getElementById('glazingPrev'),
    nextBtnPanorem = document.getElementById('glazingNext'); 
// Экземпляры класса для слайдера
let envSlider = new Slider(environmentImg),
    yardSlider = new Slider(yardImg),
    roomSlider = new Slider(roomImg),
    glazingSlider = new Slider(panoramImg);
// События для кнопок
prevBtnEnv.addEventListener('click', envSlider.prevSlide.bind(envSlider));
nextBtnEnv.addEventListener('click', envSlider.nextSlide.bind(envSlider));

prevBtnYard.addEventListener('click', yardSlider.prevSlide.bind(yardSlider));
nextBtnYard.addEventListener('click', yardSlider.nextSlide.bind(yardSlider));

prevBtnRoom.addEventListener('click', roomSlider.prevSlide.bind(roomSlider));
nextBtnRoom.addEventListener('click', roomSlider.nextSlide.bind(roomSlider));

prevBtnPanoram.addEventListener('click', glazingSlider.prevSlide.bind(glazingSlider));
nextBtnPanorem.addEventListener('click', glazingSlider.nextSlide.bind(glazingSlider));


