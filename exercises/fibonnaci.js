/* Find the number that's in the n of the fibonnaci sequence
For example,
fibonnaci(4) should return 3
fibonnaci(5) should return 5
fibonnaci(6) should return 8
*/

function fibonnaci(n){
  if (n <= 1){
    return n
  }
  return this.fibonnaci(n-1) + this.fibonnaci(n-2)
}
