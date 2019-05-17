function nestedEvenSum(obj){
    var sum = 0;
    function helper(helperInput){
        if(Object.keys(helperInput).length === 0){
            return;
        }
        for(key in helperInput){
            let value = helperInput[key];
            if(typeof(value) === 'number'){
                if(value%2 === 0){
                    sum += value;
                    delete helperInput[key]; 
                }
            }
            else if(typeof(value) === 'object'){
                helper(value);
            }
            else{
              return;
            }
        }
    }
    helper(obj);
    return sum;
}
