import './style.css';

const column = 4;
const row = 3;
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
  for (let index = 0; index < array.length; index++) {
    const indexRandom = Math.floor(Math.random() * array.length);

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
      button.className = 'button-playing-grid';
      button.textContent = arrayPhrase[indexPhrase++];
      button.style.backgroundColor = 'white';
      section.append(button);
      arrayTemporary.push(button);
    }
    matrix.push(arrayTemporary);
  }
  section.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  section.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
}

const arrayButton = document.querySelectorAll<HTMLElement>(
  '.button-playing-grid',
);
const arrayColor = ['white', 'green', 'yellow', 'orange', 'red'];
let alertFinish = true;

for (const element of arrayButton) {
  const buttonObject = {
    button: element,
    buttonClick: 0,
    buttonColor: function (color: string): void {
      this.button.style.backgroundColor = color;
    },
  };
  buttonObject.button.addEventListener('click', () => {
    buttonObject.buttonColor(arrayColor[++buttonObject.buttonClick]);
    if (hasCompleteRowOrColumn(matrix) && alertFinish) {
      alert('!!!BINGO!!!');
      alertFinish = false;
    }
  });
}

function hasCompleteRowOrColumn(matrix: HTMLElement[][]): boolean {
  let bool = false;

  for (const elementArray of matrix) {
    bool = elementArray.every(
      (element) => element.style.backgroundColor !== 'white',
    );
    if (bool) {
      return bool;
    }
  }

  for (let index = 0; index < matrix[0].length; index++) {
    bool = matrix.every(
      (element) => element[index].style.backgroundColor !== 'white',
    );
    if (bool) {
      return bool;
    }
  }

  return bool;
}
