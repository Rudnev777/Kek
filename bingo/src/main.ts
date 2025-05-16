import './style.css';

const column = 3;
const row = 4;
const arrayPhrase = [
  'Понял понял',
  '...',
  'Спасибо',
  'Почему так',
  'Во',
  'Как',
  'Споки',
  'ААА',
  'Не понимаю',
  'Затупил',
  'Подскажи',
  'Не знаю',
];

function shuffle(array: unknown[]): void {
  for (let index = array.length - 1; index > 0; index--) {
    const indexRandom = Math.floor(Math.random() * (index + 1));

    [array[index], array[indexRandom]] = [array[indexRandom], array[index]];
  }
}

shuffle(arrayPhrase);

let indexPhrase = 0;
const section = document.querySelector<HTMLElement>('#grid');
const matrix: HTMLElement[][] = [];

if (section) {
  for (let indexRow = 0; indexRow < row; indexRow++) {
    const arrayTemporary = new Array<HTMLElement>();
    for (let indexColumn = 0; indexColumn < column; indexColumn++) {
      const button = document.createElement('button');
      button.className = 'button-playing-grid button-white';
      button.textContent = arrayPhrase[indexPhrase++];

      section.append(button);
      arrayTemporary.push(button);
    }
    matrix.push(arrayTemporary);
  }
  section.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  section.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
}

const arrayColor = [
  'button-white',
  'button-green',
  'button-yellow',
  'button-orange',
  'button-red',
];
let alertFinish = true;
for (const elementArray of matrix) {
  for (const element of elementArray) {
    const buttonObject = {
      buttonClick: 0,
    };

    element.addEventListener('click', () => {
      if (buttonObject.buttonClick < 4) {
        element.classList.toggle(arrayColor[buttonObject.buttonClick]);
        element.classList.toggle(arrayColor[++buttonObject.buttonClick]);
      }
      if (hasCompleteRowOrColumn(matrix) && alertFinish) {
        alert('!!!BINGO!!!');
        alertFinish = false;
      }
    });
  }
}
function hasCompleteRowOrColumn(matrix: HTMLElement[][]): boolean {
  for (const elementArray of matrix) {
    if (
      elementArray.every(
        (element) => !element.classList.contains('button-white'),
      )
    ) {
      return true;
    }
  }

  for (let index = 0; index < matrix[0].length; index++) {
    if (
      matrix.every(
        (element) => !element[index].classList.contains('button-white'),
      )
    ) {
      return true;
    }
  }

  return false;
}
