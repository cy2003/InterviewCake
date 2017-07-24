//Find the factorial of a number


//using the recursive method
function factorial(n){
  debugger
  if (n == 0){
    return 1
  }
  else {
    return n * this.factorial(n-1)
  }
}

//using a while loop
function factorial(n){
  if (n == 0){
    return 1
  }
  var product = 1
  while (n > 0){
    product = product * n
    n -= 1
  }
  return product
}
