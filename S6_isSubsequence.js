function isSubsequence(str1, str2){
  var base = 0;
  var runner = 0;
  while(runner < str2.length){
      if(str2.charAt(runner) === str1.charAt(base)){
          base++;
      }
      if(base === str1.length){
          return true;
      }
      runner++;
  }
  return false;
}