function nearestValidPoint(x: number, y: number, points: number[][]): number {
    const nearIndex:{dis:number,ind:number}={dis:Infinity,ind:-1}
      const dis = (x:number,y:number,x1:number,y1:number):number=>{
        return Math.abs(x-x1) +Math.abs(y-y1)
      }
    for (let i = 0; i < points.length; i++) {
         const [x1,y1] = points[i]
         if(x1 ===x || y ===y1){
            let d =dis(x,y,x1,y1)
             if(nearIndex.dis>d){
                nearIndex.dis =d
                nearIndex.ind = i
             }
         }
    }
 
 return nearIndex.ind
 };

