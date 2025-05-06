import './style.css';

const column = 2;
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

for (let index = 0; index < arrayPhrase.length; index++) {
  const indexRandom = Math.floor(Math.random() * arrayPhrase.length);

  [arrayPhrase[index], arrayPhrase[indexRandom]] = [
    arrayPhrase[indexRandom],
    arrayPhrase[index],
  ];
}

let indexPhrase = 0;
const section = document.querySelector<HTMLElement>('#grid');
if (section) {
  for (let indexRow = 0; indexRow < row; indexRow++) {
    for (let indexColumn = 0; indexColumn < column; indexColumn++) {
      const button = document.createElement('button');
      button.className = 'button-playing-grid';
      button.textContent = arrayPhrase[indexPhrase++];
      button.style.backgroundColor = 'white';
      section.append(button);
    }
  }
  section.style.gridTemplateRows = `repeat(${row}, 1fr)`;
  section.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
}

const arrayButton = document.querySelectorAll<HTMLElement>(
  '.button-playing-grid',
);
const matrix: HTMLElement[][] = [];

for (let index = 0; index < row; index++) {
  const arrayTemporary = new Array<HTMLElement>();
  for (let indexTwo = 0; indexTwo < column; indexTwo++) {
    arrayTemporary.push(arrayButton[index * column + indexTwo]);
  }
  matrix.push(arrayTemporary);
}
let alertFinish = true;
for (const element of arrayButton) {
  element.addEventListener('click', () => {
    const currentColor = element.style.backgroundColor;
    if (currentColor === 'white') {
      element.style.backgroundColor = 'green';
    }
    if (currentColor === 'green') {
      element.style.backgroundColor = 'yellow';
    }
    if (currentColor === 'yellow') {
      element.style.backgroundColor = 'orange';
    }
    if (currentColor === 'orange') {
      element.style.backgroundColor = 'red';
    }
    if (finish(matrix) && alertFinish) {
      alert('!!!BINGO!!!');
      alertFinish = false;
    }
  });
}

function finish(matrix: HTMLElement[][]): boolean {
  let bool = true;

  for (const elementArray of matrix) {
    bool = true;
    for (const elementMatrix of elementArray) {
      if (elementMatrix.style.backgroundColor === 'white') {
        bool = false;
        break;
      }
    }
    if (bool) {
      return bool;
    }
  }

  for (let index = 0; index < matrix[0].length; index++) {
    bool = true;

    for (const element of matrix) {
      if (element[index].style.backgroundColor === 'white') {
        bool = false;
        break;
      }
    }
    if (bool) {
      return bool;
    }
  }

  return bool;
}
