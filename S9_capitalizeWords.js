function capitalizeWords (arr) {
    let newArr = [];
    function helper(input){
        if(input.length === 0) return;
        var str = input[0].toUpperCase();
        newArr.push(str);
        input.shift();
        helper(input);
    }
    helper(arr);
    return newArr;
}

capitalizeWords(['i', 'am']);