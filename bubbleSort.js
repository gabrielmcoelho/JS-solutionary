function bubbleSort(arr){
    for(let i=arr.length-1; i>0; i--){
        let no_swaps = true;
        for(let j=0; j<i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1);
                no_swaps = false;
            }
        }
        if(no_swaps) break;
    }
    return arr;
}

bubbleSort([10, 2, 3, 4, 5, 6, 7, 8, 9]);