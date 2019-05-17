function minSubArrayLen(arr, num){
   var soma=0;
   var min=Infinity;
   var inicio=0;
   var fim=0;
   for(let value of arr){
       soma += value;
   }
   if(arr.length === 0 || soma < num){
       return 0;
   }
   soma = arr[0];
   while((fim < arr.length) && (inicio < arr.length)){
       if(soma >= num){
        if((fim - inicio + 1) < min){
            min = fim - inicio + 1;
        }
        soma -= arr[inicio];
        inicio++;
        if(inicio>fim){
            fim++;
        }
       }
       else{
           fim++;
           soma += arr[fim];
       }
   }
   return min;
}

