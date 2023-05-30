function insertionSort (items) {
  // Loop through each element
  for (let i = 0; i < items.length; i++) {

    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
   let j = i + 1
   let currentItem = items[i] 
   // Loop backward through the sorted portion of the array
   // and scoot everything over until you find the right place to
   // insert the value you're working with
   while (j >= 0 && items[j] > currentItem) {
     
     // Copy each item to the next slot over, as long as the value is smaller
     // than the item in the sorted array we're looking at (items[j] > value)
      items[j + 1] = items[j]
      j--
    }
    // We can now insert the item in its sorted location
    items[j + 1] = items
  }

  // Remember to return the list!
  return items;
}

module.exports = insertionSort;

insertionSort([45, 70, 30, 67, 90, 3, 54, 24])



///the correct way to do this:

function insertionSort (items) {
  // Loop through each element
  for(var i = 0; i < items.length; i++) {
    // store the current item value so it can be placed correctly
    // in the sorted portion of the array
    let value = items[i];

    // Loop backward through the sorted portion of the array
    // and scoot everything over until you find the right place to
    // insert the value you're working with
    for (let j = i - 1; j > -1 && items[j] > value; j--) {
      // Copy each item to the next slot over, as long as the value is smaller
      // than the item in the sorted array we're looking at (items[j] > value)
      items[j + 1] = items[j];
    }

    // We can now insert the item in its sorted location
    items[j + 1] = value;
  }

  // Remember to return the list!
  return items;
}

// Sample data for testing out our insertion sort
let list = [14, 94, 33, 11, 77, 12, 4, 66, 23, 50, 12, 42, 89, 70, 35];
console.log(insertionSort(list));

// For the code! Credit to https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5