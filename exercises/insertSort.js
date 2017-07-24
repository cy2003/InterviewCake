array = [3, 7, 5, 2]

function insertSort(array){
  debugger
  for (var i = 1; i < array.length; i++){
    var position = i
    // This keeps track of the value you are comparing it against other values
    var tempValue = array[i]
    while ((position > 0) && (array[position -1] > tempValue)){
      /* If the tempValue is less than the value to the left, it shifts the
      larger value to the right*/
      array[position] = array[position - 1]
      // Changes the position so you can check the next left index.
      position = position -1
      // Inserts the tempValue over to the left
      array[position] = tempValue
    }
  }
  return array
}

insertSort(array)
