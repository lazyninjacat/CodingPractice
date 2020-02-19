/////////////////////////////////////////////////////////////////////////
// Propkem Statement:

// AlgoDaily Day 33

// Given an array, return just the unique elements without using any
// built-in Array filtering. In other words, you're removing any duplicates.

// Note: Order needs to be preserved, so no sorting should be done.

// function uniques(arr) {
// fill in
// }

// let arr = [3, 5, 6, 9, 9, 4, 3, 12]
// uniques(arr);
// [3, 5, 6, 9, 4, 12]

// arr = [13, 5, 3, 5, 8, 13, 14, 5, 9]
// uniques(arr);
// [13, 5, 3, 8, 14, 9]

//////////////////////////////////////////////////////////////////////////
// Solution:

var startArray = [3, 5, 6, 9, 9, 4, 3, 12];
var endArray = [];
var isDuplicate = false;

function findUniques(arr) {
  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < i; x++) {
      if (arr[x] === arr[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      endArray.push(arr[i]);
    }
    isDuplicate = false;
  }
}

findUniques(startArray);

console.log("Start array = " + startArray);
console.log("Uniques = " + endArray);
