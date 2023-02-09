


function exist(board: string[][], word: string): boolean {
   
    let ROW = board.length;
    let COL = board[0].length;

    const dfs = (row:number,col:number,count:number) => {
     
        if (count === word.length){
            return true
        }
        
        if(  row<0 || col < 0 || row>= ROW ||col >= COL || board[row][col] ==="V" || board[row][col] != word[count]) return false

        const visitedMark = board[row][col]
        board[row][col] = "V"

        const result =  dfs(row+1,col,count+1) ||
        dfs(row-1,col,count+1)||
        dfs(row,col+1,count+1)||
        dfs(row,col-1,count+1)
  

        board[row][col] = visitedMark

      return result
    }

    for (let i = 0; i < ROW; i++) {
         for (let j = 0; j <COL; j++) {
            if(dfs(i,j,0)) return true          
         }
    }
    return false
};