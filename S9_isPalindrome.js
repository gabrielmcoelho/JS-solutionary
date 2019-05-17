function isPalindrome(str1){
    var str2 = "";
    function RecHelper(helperInput){
        if(helperInput.length === 0){
            return;
        }
        let final_index = helperInput.length - 1;
        str2 = str2.concat(helperInput[final_index]);
        RecHelper(helperInput.slice(0, final_index));
    }
    RecHelper(str1);
    return(str1 === str2 ? true : false);
}

isPalindrome('awesome');