function mergeSort(arr) {
    if(arr.length <= 1) {
      //Base case: just return it
      return arr
    } else {
      //Find middle index
      let middleIndex = Math.floor(arr.length/2)

      //Using the middle index, split the array into left and right sides
      let left = arr.slice(0, middleIndex)
      let right = arr.slice(middleIndex, arr.length)

      //Sort both left and right using mergeSort
      let leftSorted = mergeSort(left)
      let rightSorted = mergeSort(right)

      //Merge two sorted arrays together
      return merge(leftSorted, rightSorted)
    }
}


// HELPER FUNCTION: merge two sorted arrays
function merge(arr1, arr2) {
  var result = [];

  while (arr1.length && arr2.length) {
    if(arr1[0] <= arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  return result.concat(arr1, arr2);
}

console.log(mergeSort([90, 20, 40, 30, 9, 8, 10, 50, 2, 25]))

module.exports = mergeSort;
