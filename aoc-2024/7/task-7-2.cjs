function helper(i, x, answer, parameter) {
    if (parameter.length == i) {
      return x == answer;
    }
  
    if (x > answer) {
      return false;
    }
  
    return (
      helper(i + 1, parseInt(x.toString() + parameter[i]), answer, parameter) ||
      helper(i + 1, x * parseInt(parameter[i]), answer, parameter) ||
      helper(i + 1, x + parseInt(parameter[i]), answer, parameter)
    );
  }
  
  let file_name = "/Users/mikhailrudnev/Desktop/programming/my_repository/aoc-2024/7/task-text-7.txt";
  
  let fs = require("fs");
  let str = fs.readFileSync(file_name).toString();
  
  let matrix = str.split("\n");
  let str_temp;
  let bool_result;
  let answer = 0;
  
  for (let i = 0; i < matrix.length; i++) {
    str_temp = matrix[i].split(": ");
    bool_result = helper(
      1,
      parseInt(str_temp[1].split(" ")[0]),
      str_temp[0],
      str_temp[1].split(" ")
    );
    if (bool_result) {
      answer += parseInt(str_temp[0]);
    }
  }
  
  console.log(answer);
  