/* eslint-disable unicorn/prefer-query-selector */
/* eslint-disable unicorn/no-array-for-each */
/* eslint-disable unicorn/no-keyword-prefix */
import './style.css';

const column = 5;
const row = 9;

const section = document.getElementById('grid');
if (section) {
  for (let index = 0; index < row; index++) {
    for (let indexTwo = 0; indexTwo < column; indexTwo++) {
      const button = document.createElement('button');
      button.className = 'button-playing-grid';
      button.textContent = `${index} - ${indexTwo}`;
      section.append(button);
    }
  }
  section.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
  section.style.gridTemplateRows = `repeat(${row}, 1fr)`;
}

const arrayButton = document.querySelectorAll('.button-playing-grid');

arrayButton.forEach((element) => {
  element.addEventListener('click', function (this: HTMLElement) {
    this.style.backgroundColor = 'red';
  });
});
