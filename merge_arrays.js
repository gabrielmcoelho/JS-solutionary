function merge_arrays(arr1, arr2){
    var i = 0;
    var j = 0;
    var newArr = [];
    while(i < arr1.length || j < arr2.length){
        let one_is_over = false;
        if(i >= arr1.length || j >= arr2.length) one_is_over = true;
        if(one_is_over){
            if(i >= arr1.length){
                newArr.push(arr2[j]);
                j++;
            }
            else{
                newArr.push(arr1[i]);
                i++
            }
        }
        else{
            if(arr1[i] < arr2[j]){
                newArr.push(arr1[i]);
                i++;
            }
            else{
                newArr.push(arr2[j]);
                j++;
            }
        }
    }
    return newArr;
}

merge_arrays([], [1, 3]);