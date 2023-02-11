interface Stack{
    ind:number;
    height:number;
}

function largestRectangleArea(heights: number[]): number {
    let stack:Stack[] = []
     let MaxArea = 0
    for (let i = 0; i<heights.length-1; i++) {
         let index = 0
        while(stack.at(-1)?.height >  heights[i]){
            let popele = stack.pop()
            console.log((i-(popele?.ind ||0))*(popele?.height||1))
            MaxArea = Math.max(MaxArea,  (i-(popele?.ind ||0))*(popele?.height||1))
            index = popele?.ind ||0
        }

        stack.push({height:heights[i],ind:index||i})
    }
    for (const {height,ind} of stack){
        MaxArea  = Math.max(MaxArea,height *(stack.length -ind))
    }
    return MaxArea
};