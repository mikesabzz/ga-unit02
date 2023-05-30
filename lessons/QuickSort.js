function quickSort(arr){
  if (arr.length <= 1) {
    return arr
  }
  else {
    let pivot = arr.pop()
    let left = arr.filter(function(item){ 
      return item <= pivot 
    })
    let right = arr.filter(function(item) {
      return item > pivot
    })
    return quickSort(left).concat([pivot], quickSort[right])
  }
}

module.exports = quickSort;