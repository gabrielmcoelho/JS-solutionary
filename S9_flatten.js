function flatten(arr){
    var newArr = [];
    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        if(typeof(helperInput[0]) === 'number'){
            newArr.push(helperInput.shift());
            helper(helperInput);
        }
        else{
            for(let value of helperInput){
                helper(value);
            }
        }
    }
    helper(arr);
    return newArr;
}
