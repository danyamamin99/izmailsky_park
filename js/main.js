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

//////////////////////////////////////////////////////////////////////////////////////
// Вкладки
let tabsList = document.querySelector('.layout__floor-tabs__list'),
    tabsLink = document.querySelectorAll('.layout__floor-tabs__link'),
    tabsBlock = document.querySelectorAll('.layout__floor-tabs__block');
tabsList.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('layout__floor-tabs__link')) {
    let id = event.target.getAttribute('href');
    
    for (let i = 0; i < tabsBlock.length; i++) {
      if (tabsBlock[i].dataset.id == id) {
        tabsBlock[i].classList.remove('tabs_noactive');
        tabsLink[i].classList.add('tab__link_active');
      } else {
        tabsBlock[i].classList.add('tabs_noactive');
        tabsLink[i].classList.remove('tab__link_active');
      }
    }
  }
});

//////////////////////////////////////////////////////////////////////////////////////
//Ипотечный калькулятор
// Форма ипотеки
const ipotekaForm = document.querySelector('.ipoteka__form');
//  Значение для span 
const totalCost = document.querySelector('.ipoteka__form__total-price'),
      anInitialFee = document.querySelector('.ipoteka__form__fee-price'),
      creditTerm = document.querySelector('.ipoteka__form__time-let');
// Процент для span - первоначальный взнос
const anInitialFeePercent = document.querySelector('.ipoteka__form__fee-percent');
// Инпуты {range}
const totalCostRange = document.querySelector('.ipoteka__form__total-input'),
      anInitialFeeRange = document.querySelector('.ipoteka__form__fee-input'),
      creditTermRange = document.querySelector('.ipoteka__form__time-input');
// Коллекция инпутов {range}
const inputsRange = document.querySelectorAll('.form-range');
// Коллекция банков, их описаний и блока с банками
const banksItem = document.querySelectorAll('.ipoteka__banks-item'),
      banksBlock = document.querySelector('.ipoteka__banks-block'),
      banksDesc = document.querySelectorAll('.ipoteka__banks__desc'),
      banksDescItem = document.querySelectorAll('.ipoteka__desc-item');
// Итоговые значения
const totalMonthlyPayment = document.querySelector('.ipoteka_monthlyPayment'),
      totalAmountOfCredit = document.querySelector('.ipoteka__amountOfCredit');
// Чексбокс
const checkboxState = document.querySelector('.ipoteka__form__state-checkbox')
let anInitialFeeLet;
// Функция которая показывает значение из инпутов в span
function appearanceValues() {
  anInitialFeeLet = totalCostRange.value / 100 * anInitialFeeRange.value;

  totalCost.textContent = totalCostRange.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  anInitialFeePercent.textContent = anInitialFeeRange.value + ' %';
  anInitialFee.textContent = anInitialFeeLet.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  creditTerm.textContent = creditTermRange.value;
}

appearanceValues();

let banks = [
  {
    name: 'sberbank',
    precents: 6.5,
  },
  {
    name: 'domrfbank',
    precents: 8.3,
  },
  {
    name: 'promcv',
    precents: 7.9,
  },
];

let currentPrecent = banks[0].precents;

banksBlock.addEventListener('click', (event) => {
  if (event.target.classList.contains('ipoteka__banks__desc')) {
    let id = event.target.getAttribute('id');

    for (let i = 0; i < banksDesc.length; i++) {
      if (id == i) {
        banksDescItem[i].classList.add('item-active');
        banksDesc[i].classList.add('item_active-bank');
      } else {
        banksDescItem[i].classList.remove('item-active');
        banksDesc[i].classList.remove('item_active-bank');
      }
    }

  };
})

for (let bank of banksItem) {
  bank.addEventListener('click', () => {
    takeActiveBank(bank);
  });
}

const takeActiveBank = currentActive => {
  let dataAttrValue = currentActive.dataset.name;
  currentBank = banks.find(bank => bank.name === dataAttrValue);
  currentPrecent = currentBank.precents;
  calculation(totalCostRange.value, anInitialFeeLet, creditTermRange.value);
}

for (let input of inputsRange) {
  input.addEventListener('input', () => {
    appearanceValues();
    calculation(totalCostRange.value, anInitialFeeLet, creditTermRange.value);
  });
}

const calculation = (totalCost, anInitialFee, creditTerm) => {

  let monthlyInterest; // Ежемесячный процент 
  let monthlyPayment; // Ежемесячный платеж
  let lounAmount = totalCost - anInitialFee; // Размер кредита
  let interestRate = currentPrecent; // Процентная ставка
  let numberOfYears = creditTerm; // Количество лет
  let numberOfMonths = 12 * numberOfYears; // Количество месяцев

  monthlyInterest = interestRate / 100 / 12;
  let tmp = Math.pow((1 + monthlyInterest), numberOfMonths);
  monthlyPayment = lounAmount * monthlyInterest * tmp / (tmp - 1);
  let monthlyPaymentArounded = Math.round(monthlyPayment);
  if ( monthlyPaymentArounded < 0 ) {
    return false;
  } else {
    totalMonthlyPayment.textContent = monthlyPaymentArounded.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    totalAmountOfCredit.textContent = lounAmount.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
  }
}
calculation(totalCostRange.value, anInitialFeeLet, creditTermRange.value);


////////////////////////////////////////////////////////////////////////////////
// Маски для инпутов
let phonePresentation = document.getElementById('phone-presentation'),
    phoneIpoteka = document.getElementById('phone-ipoteka'),
    phoneContact = document.getElementById('phone-contact');
let maskOptions = {
  mask: '+{7}(000)000-00-00'
};
let maskOptionsPlac = {
  mask: '+{7}(000)000-00-00',
  lazy: false,
};
let maskPresentation = new IMask(phonePresentation, maskOptions);
let maskIpoteka = new IMask(phoneIpoteka, maskOptions);
let maskContact = new IMask(phoneContact, maskOptionsPlac);