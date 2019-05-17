function averagePair(arr, avg){
  var left = 0;
  var right = arr.length - 1;
  while(left<right){
      let temp_calc = (arr[left]+arr[right])/2;
      if(temp_calc === avg){
          return true;
      }
      else if(temp_calc > avg){
          right--;
      }
      else{
          left++;
      }
  }
  return false;
}