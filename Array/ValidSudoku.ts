function isValidSudoku(board: string[][]): boolean {
     let row = new Map()
     let col = new Map()
     let sqr = new Map()
  
     for(let i = 0 ; i< 9; i++){
        for(let j = 0 ; j< 9; j++){
              let val = board[i][j];
            if(val==".") continue;

            if(row.has(i)){
                 if(row.get(i).includes(val)) return false;
                 row.set(i,[...row.get(i),val])
            }else{
                row.set(i,[val])
            }
            if(col.has(j)){
                 if(col.get(j).includes(val)) return false;
                 col.set(j,[...col.get(j),val])
                }else{
                col.set(j,[val])

            }
            if(sqr.has(`${Math.floor(i/3)}-${Math.floor(j/3)}`)){
                 if(sqr.get(`${Math.floor(i/3)}-${Math.floor(j/3)}`).includes(val)) return false;
                 sqr.set(`${Math.floor(i/3)}-${Math.floor(j/3)}`,[...sqr.get(`${Math.floor(i/3)}-${Math.floor(j/3)}`),val])
                }else{
                sqr.set(`${Math.floor(i/3)}-${Math.floor(j/3)}`,[val])
            }

        }
     }

    return true
};