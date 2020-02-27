function fibbonacciRecursive(n){
  var counter = 2;
  if(n < 2){
    return n;
  }
  return fibbonacciRecursive(n-1) + fibbonacciRecursive(n-2);
}
fibbonacciRecursive(75); // Don't do this