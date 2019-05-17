function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    return merge_arrays(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle, arr.length)));
}

var data = Array.apply(null, {length: 100}).map(Function.call, Math.random);
mergeSort(data);