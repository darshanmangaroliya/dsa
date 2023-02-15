function lengthOfLongestSubstring(s: string): number {
   let l = 0 ,r= 0;
   let  set = new Set();
   let ans = 0;
   while(r<s.length){
    if(set.has(s[r])){
     while(set.has(s[r])){
        set.delete(s[l])
        l++
     }
    }
    set.add(s[r])
    ans = Math.max(set.size,ans)
    r++
   }
   return ans
};