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

type BingoCell = {
  button: HTMLElement;
  buttonClick: number;
};

const matrix: BingoCell[][] = [];
const arrayColor = ['green', 'yellow', 'orange', 'red'];
let alertFinish = true;

if (section) {
  for (let indexRow = 0; indexRow < row; indexRow++) {
    const arrayTemporary = new Array<BingoCell>();
    for (let indexColumn = 0; indexColumn < column; indexColumn++) {
      const buttonTemporary = document.createElement('button');
      buttonTemporary.className = 'button-playing-grid button-play';
      buttonTemporary.textContent = arrayPhrase[indexPhrase++];

      section.append(buttonTemporary);
      arrayTemporary.push({ button: buttonTemporary, buttonClick: 0 });
      arrayTemporary[indexColumn].button.addEventListener('click', () => {
        if (arrayTemporary[indexColumn].buttonClick < 4) {
          arrayTemporary[indexColumn].button.style.setProperty(
            '--button-color',
            arrayColor[arrayTemporary[indexColumn].buttonClick++],
          );
        }
        if (hasCompleteRowOrColumn(matrix) && alertFinish) {
          alert('!!!BINGO!!!');
          alertFinish = false;
        }
      });
    }
    matrix.push(arrayTemporary);
  }
  section.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  section.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
}

function hasCompleteRowOrColumn(matrix: BingoCell[][]): boolean {
  for (const elementArray of matrix) {
    if (elementArray.every((element) => element.buttonClick !== 0)) {
      return true;
    }
  }

  for (let index = 0; index < matrix[0].length; index++) {
    if (matrix.every((element) => element[index].buttonClick !== 0)) {
      return true;
    }
  }

  return false;
}
