function maxArea(height: number[]): number {
   let ans = 0;
   let left = 0;
   let right = height.length-1;
   

   while(left < right){

     ans =Math.max(ans,(right -left)*Math.min(height[right],height[left]))

     if(height[left]<height[right]){
        left++
     }else{
        right--
     }
   }
   return ans
};

