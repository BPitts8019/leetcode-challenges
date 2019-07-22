/**
 * 
 * @param {character[][]} board
 * @return {character[][]}
 */
function get3x3Tiles (board) {
   const NUM_ITEMS = 9;
   const GRID_OFFSET = 3;
   let rtn3x3Tiles = [];
   let tile_3x3 = [];

   // for (let row = 0; row < NUM_ITEMS; row++) {
   //    for (let column = 0; column < NUM_ITEMS; column++) {
   //       console.log(`board[${row}][${column}]: ${board[row][column]}`);
   //    }
   // }

   for (let grid = 0; grid < 3; grid++) {
      console.log(`====== Grid ${grid} ======`);
      for (let idx = 0; idx < 9; idx++) {
         console.log(idx%3 + (grid%3 * GRID_OFFSET));
         // console.log(`board[${idx + (grid * GRID_OFFSET)}][${idx}]: ${board[grid][idx]}\n`);
      }
      console.log("");
   }

   console.log(board[0]);
   return rtn3x3Tiles;
}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
   const board3x3Tiles = get3x3Tiles(board);
   let rtnVal = false;
   


   return rtnVal;
};






let test01 = [
   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
   [".", "9", "8", ".", ".", ".", ".", "6", "."],
   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
   [".", "6", ".", ".", ".", ".", "2", "8", "."],
   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
   [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];


console.log(`Test01: ${isValidSudoku(test01)}`);