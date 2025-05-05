import './style.css';

const column = 5;
const row = 9;

const section = document.getElementById('grid');
if (section) {
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      const button = document.createElement('button');
      button.className = 'button-playing-grid';
      button.textContent = `${i} - ${j}`;
      section.append(button);
    }
  }
  section.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
  section.style.gridTemplateRows = `repeat(${row}, 1fr)`;
}

const arrayButton = document.querySelectorAll('.button-playing-grid');

arrayButton.forEach(element => {
  element.addEventListener('click', function (this: HTMLElement) {
    this.style.backgroundColor = 'red';
  });
});
