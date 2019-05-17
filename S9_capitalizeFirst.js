function capitalizeFirst (arr) {
    let newArr = [];
    function helper(input){
        if(input.length === 0) return;
        var str = "";
        for(let i=0; i<input[0].length; i++){
            if (i===0) str = str.concat(input[0].charAt(i).toUpperCase());
            else str = str.concat(input[0].charAt(i));
        }
        newArr.push(str);
        input.shift();
        helper(input);
    }
    helper(arr);
    return newArr;
}
