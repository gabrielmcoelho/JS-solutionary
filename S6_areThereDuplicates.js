function areThereDuplicates() {
  var fc_obj1 = {};
  for(let i=0; i<arguments.length; i++){
      fc_obj1[arguments[i]] ? fc_obj1[arguments[i]]++ : fc_obj1[arguments[i]] = 1;
      if(fc_obj1[arguments[i]]>1){
          return true;
      }
  }
  return false;
}
