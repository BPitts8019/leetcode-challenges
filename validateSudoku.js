/**
 * 
 * @param {character[][]} board
 * @return {character[][]}
 */
function get3x3Tiles (board) {
   const NUM_ITEMS = 36;
   let rtn3x3Tiles = [];
   let tile_3x3 = [];


   for (let idx = 0; idx < NUM_ITEMS; idx++) {
      console.log(`${idx % 3}, `);
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