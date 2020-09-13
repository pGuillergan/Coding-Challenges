function isCryptSolution(crypt, solution) {
  for (let i = 0; i < crypt.length; i++) {
    let temp_str = "";

    for (let j = 0; j < crypt[i].length; j++) {
      for (let k = 0; k < solution.length; k++) {
        if (crypt[i].charAt(j) == solution[k][0]) {
          temp_str += solution[k][1];
        }
      }
    }

    if (temp_str.charAt(0) == "0" && temp_str.length !== 1) {
      return false;
    }

    let temp_int = parseInt(temp_str);
    crypt[i] = temp_int;
  }

  console.log(crypt);

  if (crypt[0] + crypt[1] === crypt[2]) {
    return true;
  } else {
    return false;
  }
}

const crypt = ["SEND", "MORE", "MONEY"];
const solution = [
  ["O", "0"],
  ["M", "1"],
  ["Y", "2"],
  ["E", "5"],
  ["N", "6"],
  ["D", "7"],
  ["R", "8"],
  ["S", "9"],
];

const crypt_false = ["TEN", "TWO", "ONE"];
const solution_false = [
  ["O", "1"],
  ["T", "0"],
  ["W", "9"],
  ["E", "5"],
  ["N", "4"],
];

const crypt_fail = ["A", "A", "A"];
const solution_fail = [["A", "0"]];

console.log(isCryptSolution(crypt, solution));
console.log(isCryptSolution(crypt_false, solution_false));
console.log(isCryptSolution(crypt_fail, solution_fail))