function productOfArray(arr){
    let tam = arr.length;
    if(tam === 0) return 1;
    else{
        let last = arr[tam-1];
        arr.pop();
        return last*productOfArray(arr);
    }
}
