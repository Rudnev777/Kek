import './style.css';

const clock = document.querySelector<HTMLElement>('#current-time');
function currentTime() {
  const data = new Date();
  if (clock) {
    clock.textContent = data.toDateString();
  }
}

setInterval(currentTime, 1000);

const column = 3;
const row = 4;
type phraseClue = {
  phrase: string;
  clue: string;
};
const arrayPhrase: phraseClue[] = [
  { phrase: 'Понял понял', clue: '' },
  { phrase: '...', clue: 'Тупит' },
  { phrase: 'Спасибо', clue: '' },
  { phrase: 'Почему так', clue: '' },
  { phrase: 'Во', clue: 'Надежда на похвалу' },
  { phrase: 'Как', clue: '' },
  { phrase: 'Споки', clue: '' },
  { phrase: 'ААА', clue: 'Понимание что не прав' },
  { phrase: 'Не понимаю', clue: '' },
  { phrase: 'Затупил', clue: '' },
  { phrase: 'Подскажи', clue: '' },
  { phrase: 'Не знаю', clue: '' },
];

function shuffle(array: unknown[]): void {
  for (let index = array.length - 1; index > 0; index--) {
    const indexRandom = Math.floor(Math.random() * (index + 1));

    [array[index], array[indexRandom]] = [array[indexRandom], array[index]];
  }
}

function bingoPlay() {
  shuffle(arrayPhrase);

  let indexPhrase = 0;
  const section = document.querySelector<HTMLElement>('#grid');
  section?.replaceChildren();
  type BingoCell = {
    button: HTMLElement;
    buttonClick: number;
  };

  const cells: BingoCell[][] = [];
  const buttonPlayBingoColor = ['green', 'yellow', 'orange', 'red'];
  const buttonPlayBingoChar = ['🟩', '🟨', '🟧', '🟥'];
  const stringCell = Array.from({ length: row }, () =>
    Array.from({ length: column }, () => '⬜️'),
  );

  let alertWin = true;
  const stopColorChange = 4;

  if (section) {
    for (let indexRow = 0; indexRow < row; indexRow++) {
      const arrayTemporary = new Array<BingoCell>();
      for (let indexColumn = 0; indexColumn < column; indexColumn++) {
        const buttonCell: BingoCell = {
          button: document.createElement('button'),
          buttonClick: 0,
        };

        const originalText = arrayPhrase[indexPhrase].phrase;
        const textClue = arrayPhrase[indexPhrase].clue;
        buttonCell.button.textContent = arrayPhrase[indexPhrase++].phrase;

        if (arrayPhrase[indexPhrase - 1].clue === '') {
          buttonCell.button.className = 'button-cell';
        } else {
          buttonCell.button.className = 'button-cell button-cell-clue';
          buttonCell.button.addEventListener('mouseenter', () => {
            buttonCell.button.textContent = textClue;
          });

          buttonCell.button.addEventListener('mouseleave', () => {
            buttonCell.button.textContent = originalText;
          });
        }

        section.append(buttonCell.button);
        arrayTemporary.push(buttonCell);

        buttonCell.button.addEventListener('click', () => {
          if (buttonCell.buttonClick < stopColorChange) {
            stringCell[indexRow][indexColumn] =
              buttonPlayBingoChar[buttonCell.buttonClick];

            buttonCell.button.style.setProperty(
              '--button-color',
              buttonPlayBingoColor[buttonCell.buttonClick++],
            );
          }
          if (alertWin && hasCompleteRowOrColumn(cells)) {
            alert('!!!BINGO!!!');
            alertWin = false;
          }
        });
      }
      cells.push(arrayTemporary);
    }

    section.style.setProperty('--cells-bingo-play-rows', `repeat(${row}, 1fr)`);
    section.style.setProperty(
      '--cells-bingo-play-columns',
      `repeat(${column}, 1fr)`,
    );

    function hasCompleteRowOrColumn(cells: BingoCell[][]): boolean {
      for (const elementArray of cells) {
        if (elementArray.every((element) => element.buttonClick !== 0)) {
          return true;
        }
      }

      for (let index = 0; index < cells[0].length; index++) {
        if (cells.every((element) => element[index].buttonClick !== 0)) {
          return true;
        }
      }

      return false;
    }

    const buttonCopy = document.querySelector<HTMLElement>('#copy-button');
    if (buttonCopy) {
      buttonCopy.addEventListener('click', () => {
        const finishString = stringCell.map((x) => x.join('')).join('\n');
        void navigator.clipboard.writeText(finishString);
      });
    }
  }
}

bingoPlay();
setInterval(() => {
  bingoPlay();
}, 86_400_000);
