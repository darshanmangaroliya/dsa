function isHappy(n: number): boolean {
    const checkishappy = (n:number)=>{

        const sum = n.toString().split("").reduce((a:string,b:string)=>Number(a) + (Number(b)*Number(b)));

        if (Number(sum) == 1) return true;

        checkishappy(Number(sum))
    }
     checkishappy(n)
    return  false
};