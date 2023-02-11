function dailyTemperatures(temperatures: number[]): number[] {
    let ans = new Array(temperatures.length).fill(0)
    let stack:{val:number,ind:number}[] = []

    for (let i = 0; i < temperatures.length; i++) {
         
            while(stack.at(-1).val<temperatures[i]){
                ans[stack.at(-1).ind] = i- stack.at(-1).ind;
                stack.pop()
            }
          

        stack.push({val:temperatures[i],ind:i})
    }


    return ans
};