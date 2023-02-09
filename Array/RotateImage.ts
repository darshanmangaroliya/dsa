/**
 Do not return anything, modify matrix in-place instead.
 */
 function rotate(matrix: number[][]): void {
   
    const transformmatrix =()=>{
       for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            [matrix[i][j],matrix[j][i]] =[matrix[j][i],matrix[i][j]]
        }
       }
    }
    const rotateIndex =()=>{
       for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            [matrix[i][j],matrix[i][matrix.length-1-j]] = [matrix[i][matrix.length-1-j],matrix[i][j],] 
        }
       }
    }
    transformmatrix()
    rotateIndex()
 };