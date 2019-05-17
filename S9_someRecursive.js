function someRecursive(arr, func){
    if(arr.length === 0){
        return false;
    }
    if(func(arr.pop())){
        return true;
    }
    someRecursive(arr, func);
}
