/*
Your quirky boss collects rare, old coins...
They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would output 44—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/


function changePossibilitiesBottomUp(amount, denominations) {

  // intialize an array of zeros with indices up to amount
  var waysOfDoingNcents = [];
  for (var i = 0; i <= amount; i++) {
      waysOfDoingNcents[i] = 0;
  }
  waysOfDoingNcents[0] = 1;

  denominations.forEach(function(coin) {
      for (var higherAmount = coin; higherAmount <= amount; higherAmount++) {
          var higherAmountRemainder = higherAmount - coin;
          waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
      }
  });

  return waysOfDoingNcents[amount];
}

/*
Here's how waysOfDoingNCents would look in successive iterations of our function for amount=55 and denominations=[1,3,5][1,3,5].

  ===========
key:
a = higherAmount
r = higherAmountRemainder
===========

============
for coin = 1:
============
[1, 1, 0, 0, 0, 0]
 r  a

[1, 1, 1, 0, 0, 0]
    r  a

[1, 1, 1, 1, 0, 0]
       r  a

[1, 1, 1, 1, 1, 0]
          r  a

[1, 1, 1, 1, 1, 1]
             r  a

============
for coin = 3:
=============
[1, 1, 1, 2, 1, 1]
 r        a

[1, 1, 1, 2, 2, 1]
    r        a

[1, 1, 1, 2, 2, 2]
       r        a

============
for coin = 5:
=============
[1, 1, 1, 2, 2, 3]
 r              a


final answer: 3
*/
