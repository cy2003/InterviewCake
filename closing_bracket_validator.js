/*
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces, brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return True
"{ [ ( ] ) }" should return False
"{ [ }" should return False
*/


var string = "{[(])}"
var string2 = "{[]()}"


function bracketValidator(string){
  var openersToClosers = {
    '(':')',
    '[':']',
    '{':'}'
  }

  var openers = ['(', '[', '{']
  var closers = [')', ']', '}']

  stack = []

  for (var i = 0; i < string.length; i++){
    var char = string[i]
    if (openers.includes(char)){
      stack.push(char)
    }
    else if (closers.includes(char)){
      if (!stack.length){
        return false
      }
      else {
        lastUnclosedOpener = stack.pop()
        if (openersToClosers[lastUnclosedOpener] !== char){
          return false
        }
      }
    }
  }
  return stack.length === 0
}
