/* Selection Sort is twice as fast as Bubble Sort. Selection sort only makes
one swap when it passes through the loop each time. Bubble sort makes a
swap each time it makes a comparison and the number is in the wrong order */


array = [3, 7, 5, 2, 4]

function selectionSort(array){
  for(var i = 0; i < array.length; i++){
    var lowestNumberIndex = i
    for (var j = i+1; j <array.length; j++){
      if(array[j] < array[lowestNumberIndex]){
        lowestNumberIndex = j
      }
    }
    if(lowestNumberIndex != i){
      var temp = array[i]
      array[i] = array[lowestNumberIndex]
      array[lowestNumberIndex] = temp
    }
  }
  return array
}
