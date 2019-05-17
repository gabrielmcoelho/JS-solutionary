function reverse(str){
    let rev = "";
    if(str.length === 0){
        return rev;
    }
    let final_index = str.length - 1;
    rev = rev.concat(str[final_index]);
    return rev.concat(reverse(str.slice(0, final_index)));
}

reverse("gabriel");