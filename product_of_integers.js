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
