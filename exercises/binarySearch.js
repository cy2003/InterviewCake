var array = [3, 7, 12, 20, 31, 34, 37, 40, 41, 45]
var number = 41

function binarySearch(array, number){
  // This locates the bottom index of the set of numbers we're searching
  var lowPoint = 0
  // This locates the top index of the set of numbers we're searching
  var highPoint = array.length - 1
  // This locates the middle index of the set of numbers we're searching
  var midPoint = highPoint/2

  while (lowPoint <= highPoint){
    var midPoint = Math.round((lowPoint + highPoint)/2)
    /* Math.round() will round it off to the nearest integer. So 4.5 would be
    rounded off to 5 */
    var valueAtMidPoint = array[midPoint]
    if (number < valueAtMidPoint){
      highPoint = midPoint - 1
      /* if the number is less than valueAtMidPoint then we will
      focus on the elements to the left of the valueAtMidPoint */
    }
    else if (number > valueAtMidPoint) {
      lowPoint = midPoint + 1
      /* if the number is greater than the valueAtMidPoint then we will
      focus on the elements to the right of the valueAtMidPoint */
    }
    else if (number === valueAtMidPoint) {
      return midPoint
    }
  }
  return false
}
