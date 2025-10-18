import "./style.css";

const matrixNumbersHTML = [
  document.querySelector<HTMLElement>("#number-from-clock-hour-one-id"),
  document.querySelector<HTMLElement>("#number-from-clock-hour-two-id"),
  document.querySelector<HTMLElement>("#number-from-clock-minute-one-id"),
  document.querySelector<HTMLElement>("#number-from-clock-minute-two-id"),
  document.querySelector<HTMLElement>("#number-from-clock-second-one-id"),
  document.querySelector<HTMLElement>("#number-from-clock-second-two-id"),
];

type Arrow = {
  minute: HTMLElement;
  hour: HTMLElement;
};

const matrixNumbers: Arrow[][][] = [];
const row = 6;
const col = 4;

for (const element of matrixNumbersHTML) {
  const matrixNumber: Arrow[][] = [];
  for (let indexRow = 0; indexRow < row; indexRow++) {
    const arrayNumber: Arrow[] = [];
    for (let indexCol = 0; indexCol < col; indexCol++) {
      const elementWatch = document.createElement("div");
      elementWatch.className = "watch";
      const arrow: Arrow = {
        minute: document.createElement("div"),
        hour: document.createElement("div"),
      };

      arrow.minute.className = "arrow-minute";
      arrow.hour.className = "arrow-hour";

      elementWatch.append(arrow.minute);
      elementWatch.append(arrow.hour);
      arrayNumber.push(arrow);
      element?.append(elementWatch);
    }
    matrixNumber.push(arrayNumber);
  }

  matrixNumbers.push(matrixNumber);
}

setInterval(() => {updateTime(matrixNumbers)}, 1000);

function ConstructionOfNumbers(matrix: Arrow[][], number: number) {
  for (let indexRow = 0; indexRow < row; indexRow++) {
    for (let indexCol = 0; indexCol < col; indexCol++) {
      if (number === 0) {
        if (indexRow === 0 || indexRow === row - 1) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 1 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 1 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === row - 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 1) {
        watchTransform(matrix[indexRow][indexCol], 225, 225);
        if (indexCol === 1 || indexCol === col - 2) {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          indexRow === row - 2 ||
          indexRow === row - 1 ||
          (indexRow === 0 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === row - 2 && indexCol === 0)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 2) ||
          (indexRow === row - 2 && indexCol === col - 1) ||
          (indexRow === 1 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === 1 && indexCol === 0) ||
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === 4 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 2) {
        if (
          indexRow === 0 ||
          indexRow === row - 1 ||
          (indexRow === 2 && indexCol === 1) ||
          (indexRow === 1 && indexCol === 1) ||
          (indexRow === 4 && indexCol === 2) ||
          (indexRow === 3 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 2 && indexCol === 0) ||
          (indexRow === 3 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 1 && indexCol === col - 2) ||
          (indexRow === row - 2 && indexCol === col - 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === row - 2 && indexCol === 1) ||
          (indexRow === 1 && indexCol === 0)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === 2 && indexCol === 2) ||
          (indexRow === 3 && indexCol === col - 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 3) {
        if (
          indexRow === 0 ||
          indexRow === row - 1 ||
          (indexRow === 4 && indexCol === 1) ||
          (indexRow === 1 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 4 && indexCol === 0) ||
          (indexRow === 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 3 && indexCol === col - 2) ||
          (indexRow === 1 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === 3 && indexCol === 0) ||
          (indexRow === 3 && indexCol === 1) ||
          (indexRow === 1 && indexCol === 0)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === col - 2) ||
          (indexRow === 2 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }

        if (indexCol === 0 && (indexRow === 2 || indexRow === 3)) {
          watchTransform(matrix[indexRow][indexCol], 225, 225);
        }
      }
      if (number === 4) {
        watchTransform(matrix[indexRow][indexCol], 0, 180);

        if (
          (indexRow === 4 && indexCol === 0) ||
          (indexRow === 4 && indexCol === 1) ||
          (indexRow === 5 && indexCol === 0) ||
          (indexRow === 5 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 225, 225);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 0 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (indexRow === 3 && indexCol === 1) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 0 && indexCol === 1) ||
          (indexRow === 3 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 2) ||
          (indexRow === 3 && indexCol === 0) ||
          (indexRow === 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === 2 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 5) {
        if (
          indexRow === 0 ||
          indexRow === row - 1 ||
          (indexRow === 3 && indexCol === 1) ||
          (indexRow === 4 && indexCol === 1) ||
          (indexRow === 2 && indexCol === 2) ||
          (indexRow === 1 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 1 && indexCol === 1) ||
          (indexRow === 4 && indexCol === 0)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 3 && indexCol === col - 2) ||
          (indexRow === 2 && indexCol === col - 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === 3 && indexCol === 0) ||
          (indexRow === 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === col - 2) ||
          (indexRow === 1 && indexCol === col - 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 6) {
        if (
          indexRow === 0 ||
          indexRow === row - 1 ||
          (indexRow === 1 && indexCol === 2) ||
          (indexRow === 2 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 1 && indexCol === 1) ||
          (indexRow === 3 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 2 && indexCol === col - 1) ||
          (indexRow === 3 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === row - 2 && indexCol === 1) ||
          (indexRow === 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === col - 2) ||
          (indexRow === 1 && indexCol === col - 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 7) {
        watchTransform(matrix[indexRow][indexCol], 225, 225);
        if (indexCol === col - 1 || indexCol === col - 2) {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (indexRow === 0 || indexRow === 1) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        }

        if (indexRow === 1 && indexCol === col - 1) {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (indexRow === 0 && indexCol === 0) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }
        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 1 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 2) ||
          (indexRow === 1 && indexCol === 0)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (indexRow === row - 1 && indexCol === col - 1) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 8) {
        if (indexRow === 0 || indexRow === row - 1) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 1 && indexCol === 1) ||
          (indexRow === 3 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 3 && indexCol === col - 2) ||
          (indexRow === 1 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === row - 2 && indexCol === 1) ||
          (indexRow === 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === col - 2) ||
          (indexRow === 2 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
      if (number === 9) {
        if (
          indexRow === 0 ||
          indexRow === row - 1 ||
          (indexRow === 3 && indexCol === 1) ||
          (indexRow === 4 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 270);
        } else {
          watchTransform(matrix[indexRow][indexCol], 0, 180);
        }

        if (
          (indexRow === 0 && indexCol === 0) ||
          (indexRow === 1 && indexCol === 1) ||
          (indexRow === 4 && indexCol === 0)
        ) {
          watchTransform(matrix[indexRow][indexCol], 90, 180);
        }

        if (
          (indexRow === 0 && indexCol === col - 1) ||
          (indexRow === 3 && indexCol === col - 2) ||
          (indexRow === 1 && indexCol === col - 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 270, 180);
        }

        if (
          (indexRow === row - 1 && indexCol === 0) ||
          (indexRow === 3 && indexCol === 0) ||
          (indexRow === 2 && indexCol === 1)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 90);
        }

        if (
          (indexRow === row - 1 && indexCol === col - 1) ||
          (indexRow === row - 2 && indexCol === col - 2) ||
          (indexRow === 2 && indexCol === 2)
        ) {
          watchTransform(matrix[indexRow][indexCol], 0, 270);
        }
      }
    }
  }
}

function watchTransform(element: Arrow, minute: number, hour: number) {
  //   if(minute === 225 && hour === 225){
  //   element.minute.style.backgroundColor = 'white'
  //   element.hour.style.backgroundColor = 'white'
  // }
  // else{
  //     element.minute.style.backgroundColor = 'black'
  //   element.hour.style.backgroundColor = 'black'
  // }
  element.minute.style.transform = `rotate(${minute}deg)`;
  element.hour.style.transform = `rotate(${hour}deg)`;
}

function updateTime(matrix: Arrow[][][]) {
  const data = new Date();
  const hour = data.getHours();
  const minutes = data.getMinutes();
  const seconds = data.getSeconds();

  ConstructionOfNumbers(matrix[0], Math.floor(hour / 10));
  ConstructionOfNumbers(matrix[1], hour % 10);
  ConstructionOfNumbers(matrix[2], Math.floor(minutes / 10));
  ConstructionOfNumbers(matrix[3], minutes % 10);
  ConstructionOfNumbers(matrix[4], Math.floor(seconds / 10));
  ConstructionOfNumbers(matrix[5], seconds % 10);
}
