/*
An integer P is a whole square if it is a square of some integer Q
P = Q^2

Write a function

function solution (A, B)

that given two integers A and B, returns the number of whole squares within
the interval [A..B] (both ends included)

For example, given A = 4 and B = 17, the function should return 3, because
there are three squares of integers in the interval [4..17], namely

4 = 2^2
9 = 3^2
16 = 4^2

Complexity:
- expected worst-case time complexity is O(sqrt(abs(B)))
- expected worst-case space complexity is 0(1)
*/

function countWholeSquares(a, b){
  var count += 1
  for (var i = a; i <= b; i++){
    if (Math.sqrt(i) % 1 === 0){
      count += 1
    }
  }
  return count 
}
