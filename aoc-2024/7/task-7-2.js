import fs from 'node:fs';

function helper(index, x, answer, parameter) {
  if (parameter.length == index) {
    return x == answer;
  }

  if (x > answer) {
    return false;
  }

  return (
    helper(
      index + 1,
      Number.parseInt(x.toString() + parameter[index]),
      answer,
      parameter,
    ) ||
    helper(
      index + 1,
      x * Number.parseInt(parameter[index]),
      answer,
      parameter,
    ) ||
    helper(index + 1, x + Number.parseInt(parameter[index]), answer, parameter)
  );
}

let fileName = '../aoc-2024/7/task-text-7.txt';

let string = fs.readFileSync(fileName).toString();

let matrix = string.split('\n');
let stringTemporary;
let boolResult;
let answer = 0;

for (const element of matrix) {
  stringTemporary = element.split(': ');
  boolResult = helper(
    1,
    Number.parseInt(stringTemporary[1].split(' ')[0]),
    stringTemporary[0],
    stringTemporary[1].split(' '),
  );
  if (boolResult) {
    answer += Number.parseInt(stringTemporary[0]);
  }
}

console.log(answer);
