function fib(num){
  return ((num === 1 || num === 2) ? 1 : (fib(num-1) + fib(num-2)));
}
