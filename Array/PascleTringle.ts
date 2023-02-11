function generate(numRows: number): number[][] {
  let ans: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    ans.push(new Array(i));
    for (let j = 0; j <= i; j++) {
      if (j == 0 || j == i) {
        console.log("hii2");

        ans[i][j] = 1;
      } else {
        console.log("hii3");

        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
      }
    }
  }
  return ans;
}
