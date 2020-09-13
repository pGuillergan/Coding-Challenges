function sudoku2(grid) {
  const row_len = grid.length;
  const col_len = grid[0].length;
  const area = row_len * col_len;

  let x_offset = 1;
  let y_offset = 1;

  for (let i = 0; i < area; i++) {
    let x = Math.floor(i / row_len);
    let y = i % col_len;

    let ctr = 0;

    if (grid[x][y] !== ".") {
      for (let j = 0; j < row_len; j++) {
        if (grid[x][y] === grid[x][j]) {
          ctr += 1;
        }
        if (ctr > 1) {
          return false;
        }
      }
      ctr = 0;
      for (let j = 0; j < col_len; j++) {
        if (grid[x][y] === grid[j][y]) {
          ctr += 1;
        }
        if (ctr > 1) {
          return false;
        }
      }
      ctr = 0;
    }
    // ****************************************
    if (x == x_offset + 3) {
      x_offset = x;
      console.log("adding 3 to x");
    }
    if (x == x_offset && y == y_offset) {
      y_offset = (y_offset + 3) % row_len;

      console.log(` at ${x} ${y}`);

      let sub_arr = [];

      if (grid[x - 1][y - 1] !== ".") {
        sub_arr.push(grid[x - 1][y - 1]);
      }
      if (grid[x - 1][y] !== ".") {
        sub_arr.push(grid[x - 1][y]);
      }
      if (grid[x - 1][y + 1] !== ".") {
        sub_arr.push(grid[x - 1][y + 1]);
      }

      if (grid[x][y - 1] !== ".") {
        sub_arr.push(grid[x][y - 1]);
      }
      if (grid[x][y] !== ".") {
        sub_arr.push(grid[x][y]);
      }
      if (grid[x][y + 1] !== ".") {
        sub_arr.push(grid[x][y + 1]);
      }

      if (grid[x + 1][y - 1] !== ".") {
        sub_arr.push(grid[x + 1][y - 1]);
      }
      if (grid[x + 1][y] !== ".") {
        sub_arr.push(grid[x + 1][y]);
      }
      if (grid[x + 1][y + 1] !== ".") {
        sub_arr.push(grid[x + 1][y + 1]);
      }

      console.log(sub_arr)
      sub_arr.sort();
      for(let k = 0 ;k<sub_arr.length; k++){
        if(sub_arr.length > 1 && ( sub_arr[k] == sub_arr[k+1] )){
            return false
        }
      }

      
    }
  }

  return true;
}

grid = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];

false_grid = [
  [".", ".", ".", ".", "2", ".", ".", "9", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "."],
  ["7", "1", ".", ".", "7", "5", ".", ".", "."],
  [".", "7", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "8", "3", ".", ".", "."],
  [".", ".", "8", ".", ".", "7", ".", "6", "."],
  [".", ".", ".", ".", ".", "2", ".", ".", "."],
  [".", "1", ".", "2", ".", ".", ".", ".", "."],
  [".", "2", ".", ".", "3", ".", ".", ".", "."],
];

fail_test = [
  [".", "4", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "4", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "1", ".", ".", "7", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", "3", ".", ".", ".", "6", "."],
  [".", ".", ".", ".", ".", "6", ".", "9", "."],
  [".", ".", ".", ".", "1", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", "2", ".", "."],
  [".", ".", ".", "8", ".", ".", ".", ".", "."],
];

grid_check_fail = [
  [".", ".", ".", ".", ".", ".", ".", ".", "2"],
  [".", ".", ".", ".", ".", ".", "6", ".", "."],
  [".", ".", "1", "4", ".", ".", "8", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", "3", ".", ".", ".", "."],
  ["5", ".", "8", "6", ".", ".", ".", ".", "."],
  [".", "9", ".", ".", ".", ".", "4", ".", "."],
  [".", ".", ".", ".", "5", ".", ".", ".", "."],
];

console.time("someFunction");
// console.log( sudoku2(grid) )
// console.log( sudoku2(false_grid) )
console.log( sudoku2(fail_test) )
// console.log(sudoku2(grid_check_fail));
console.timeEnd("someFunction");
