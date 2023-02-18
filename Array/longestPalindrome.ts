function longestPalindrome(s: string): string {
    let [start,maxLength] = [0,1]; 
      for (let i = 0; i < s.length; i++) {
      let left = i-1;
      let right = i+1 
      while(left>=0 &&right<s.length&& (s[right] === s[left])){
         if((right-left+1)> maxLength){
            maxLength = right-left+1;
            start =left
         }
        left--
        right++
      }       
       left = i-1;
       right = i 
      while(left>=0 &&right<s.length&& (s[right] === s[left])){
         if((right-left+1)> maxLength){
            maxLength = right-left+1;
            start =left
         }
        left--
        right++
      }       
      }

      return s.substr(start,maxLength)
    };

    const foo ={
        bar(){

        },
        x:"bgd"
    }