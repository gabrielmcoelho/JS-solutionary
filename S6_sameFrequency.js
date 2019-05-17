function sameFrequency(num1, num2){
    var fc_num1 = {};
    while(num1!==0){
        let last_digit = num1%10;
        fc_num1[last_digit] ? fc_num1[last_digit]++ : fc_num1[last_digit] = 1;
        num1 = Math.floor(num1/10);
    }
    while(num2!==0){
        let last_digit = num2%10;
        if(!(last_digit in fc_num1)){
            return false;
        }
        fc_num1[last_digit]--;
        if(fc_num1[last_digit]<0){
            return false;
        }
        num2 = Math.floor(num2/10);
    }
    return true;
}

sameFrequency(0, 0);