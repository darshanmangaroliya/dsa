/**
 Do not return anything, modify board in-place instead.
 */

//  Original New state
//    0       0    0
//    1       0    1
//    0       1    2
//    1       1    3
function gameOfLife(board: number[][]): void {
    let ROW = board.length;
    let COL = board[0].length;
  
    const findlivenei = (r:number,c:number): number => {
      let nei = 0;
       for (let i = r-1; i <= r+1; i++) {
          for (let j = c-1; j <= c+1; j++) {
              if(i<0 ||j<0 ||i>=ROW ||j>COL || (i===r && j===c)) continue;
  
              if([1,3].includes(board[i][j])){
                  nei++
              }
          }
       }
  
      return nei;
    };
  
    for (let r = 0; r < ROW; r++) {
      for (let c = 0; c < COL; c++) {
        let livenei = findlivenei(r,c);
  
        if (board[r][c]) {
          if ([2, 3].includes(livenei)) {
            board[r][c] = 3;
          }
        } else {
          if (livenei === 3) {
            board[r][c] = 2;
          }
        }
      }
    }
    for (let r = 0; r < ROW; r++) {
      for (let c = 0; c < COL; c++) {
  
          if([2,3].includes(board[r][c])){
              board[r][c] = 1
          }else{
              board[r][c] = 0
          }
      }
    }
  }
  