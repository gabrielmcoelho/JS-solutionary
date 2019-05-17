function binarySearch(arr, val){
  var left = 0;
  var right = arr.length - 1;
  while(left <= right){
    let middle = Math.ceil((left+right)/2);
    if(arr[middle] === val) return middle;
    else if(arr[middle] > val) right = middle - 1;
    else left = middle + 1;
  }
  return -1;
}

5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99