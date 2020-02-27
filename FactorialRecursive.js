function findFactorialRecursive(number) {
  const answer = 2;
  if(number === 2){
    return answer;
  }else{
    return number * findFactorialRecursive(number-1);
  }
  return
}

findFactorialRecursive(3);