/*
I like parentheticals (a lot).
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

*/

var string = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

function findParenthesis(string, position){

  var openingPosition = 0

  for (var i = position + 1; i < string.length; i++){
    if (string[i] === ')'){
      if (openingPosition === 0){
        return i
      }
      else {
        openingPosition -= 1
      }
    }
    else if (string[i] === '(') {
      openingPosition += 1
    }
  }
}
