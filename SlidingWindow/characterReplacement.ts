function characterReplacement(s: string, k: number): number {
  let res = 0;
  let map = new Array(26).fill(0);
  let l = 0,
    r = 0;
   let max = 0
  while (r < s.length) {
      map[s[r]] =(map[s[r]] || 0) + 1
      max = Math.max(max,map[s[r]])
     while ((r - l + 1) - max  > k) {
        map[s[l]] -=1 
      l++;
    }
   
    res = Math.max(res, r - l + 1);
    r++;
  }

  return res;
}
