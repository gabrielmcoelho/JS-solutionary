function maxSubArraySum(arr, num){
    if(num>arr.length){
        return null;
    }
    var sumTemp = 0;
    var sumMax = 0;
    for(let i=0; i<num; i++){
      sumTemp += arr[i];
    }
    sumMax = sumTemp;
    for(let i=num; i<arr.length; i++){
      sumTemp = sumTemp - arr[i-num] + arr[i];
      sumMax = Math.max(sumTemp, sumMax);
    }
    return sumMax;
}
