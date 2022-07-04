let phrases = [
  { text: 'ДА' },
  { text: 'очень вероятно' },
  { text: 'безусловно'},
  { text: 'без сомнений'},
  { text: 'должно быть так' },
  { text: 'абсолютно точно'},
  { text: 'мне кажется да' },
  { text: 'духи говорят да'},
  { text: 'похоже, что да'},
  { text: 'НЕТ'},
  { text: 'везды говорят,нет' },
  { text: 'ответ нет' },
  { text: 'не надейтесь'},
  { text: 'спросите снова'},
  { text: 'не могу сказать' },
  { text: 'ответ не ясен'},
  { text: 'вряд ли' },
  { text: 'спросите позже'},
  { text: 'мало шансов'},
  { text: 'не похоже'}
 
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.template-container');
let phrase = document.querySelector('.template-container__title');



button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  phrase.textContent = randomElement.text;

});

