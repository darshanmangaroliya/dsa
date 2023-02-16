function addToArrayForm(num: number[], k: number): any[] {
    let sum = BigInt(num.join('')) + BigInt(k);
    let convertSum = sum.toString().split('');
    return convertSum;
 };