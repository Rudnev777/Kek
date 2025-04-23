import fs from "node:fs";

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

let file_name =
  "../aoc-2024/7/task-text-7.txt";

let string = fs.readFileSync(file_name).toString();

let matrix = string.split("\n");
let string_temporary;
let bool_result;
let answer = 0;

for (const element of matrix) {
  string_temporary = element.split(": ");
  bool_result = helper(
    1,
    Number.parseInt(string_temporary[1].split(" ")[0]),
    string_temporary[0],
    string_temporary[1].split(" "),
  );
  if (bool_result) {
    answer += Number.parseInt(string_temporary[0]);
  }
}

console.log(answer);
