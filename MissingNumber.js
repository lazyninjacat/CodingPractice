////////////////////////////////////////
// AlgoDaily Day 34
// Problem Statement:
//
// We're given an array of continuous numbers that should increment
// sequentially by 1, which just means that we expect a sequence like:
//
// [1, 2, 3, 4, 5, 6, 7]
//
// However, we notice that there are some missing numbers in the sequence.
//
// [1, 2, 4, 5, 7]
//
// Can you write a method missingNumbers that takes an array of continuous
// numbers and returns the missing integers?
//
// missingNumbers([1, 2, 4, 5, 7]);
// [3, 6]

//////////////////////////////////////////////////////////////////////
// Solution:

var startArray = [1, 2, 4, 5, 7];
var endArray = [];

function missingNumbers() {
  for (i = 0; i < startArray.length - 1; i++) {
    if (startArray[i + 1] !== startArray[i] + 1) {
      endArray.push(startArray[i] + 1);
    }
  }
}

missingNumbers();

console.log("Start Array = " + startArray);
console.log("Missing number = " + endArray);
