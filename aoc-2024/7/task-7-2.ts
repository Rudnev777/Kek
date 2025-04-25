import fs from 'node:fs';
import path from 'node:path';

function helper(
  index: number,
  x: number,
  answer: number,
  parameter: string[],
): boolean {
  if (parameter.length === index) {
    return x === answer;
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

const fileName = path.resolve(import.meta.dirname, 'task-text-7.txt');

const string = fs.readFileSync(fileName).toString();

const matrix = string.split('\n');
let stringTemporary: string[];
let boolResult: boolean;
let answer = 0;

for (const element of matrix) {
  stringTemporary = element.split(': ');
  boolResult = helper(
    1,
    Number.parseInt(stringTemporary[1].split(' ')[0]),
    Number.parseInt(stringTemporary[0]),
    stringTemporary[1].split(' '),
  );
  if (boolResult) {
    answer += Number.parseInt(stringTemporary[0]);
  }
}

console.log(answer);
