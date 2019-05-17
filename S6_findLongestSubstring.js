function findLongestSubstring(str){
    if (str.length === 0){
        return 0;
    }

    var max = 1;
    var inicio = 0;
    var fim = 1;
    var substr = str[0];

    while(fim < str.length){
        if(!(substr.includes(str[fim]))){
            substr = substr.concat(str[fim]);
            fim++;
            if(substr.length > max){
                max = substr.length;
            }
        }
        else{
            inicio++;
            fim = inicio + 1;
            substr = str[inicio];
        }
    }

    return max;
}
