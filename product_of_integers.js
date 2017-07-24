/*
Write a function get_products_of_all_ints_except_at_index() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
*/


function product_of_integers(array){
  var exceptAtIndex = []
  var productSoFar = 1
  for (var i = 0; i < array.length; i++){
    exceptAtIndex[i] = productSoFar
    productSoFar *= array[i]
  }
  productSoFar = 1
  for (var j = array.length-1; j >= 0; j--){
    exceptAtIndex[j] *= productSoFar
    productSoFar *= array[j]
  }

  return exceptAtIndex
}
