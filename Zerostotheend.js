/////////////////////////////////////////////////////////////////////////
// Propkem Statement:

// AlgoDaily Day 33

// Day 25: Zeros to the End
// Write a method that moves all zeros in an array to its end. You should maintain the order of all other elements. Here's an example:

// zerosToEnd([1, 0, 2, 0, 4, 0])
// [1, 2, 4, 0, 0, 0]
// And another one:

// zerosToEnd([1, 0, 2, 0, 4, 0])
// [1, 2, 4, 0, 0, 0]
// Fill in the following function signature:

// function zerosToEnd(nums) {
//   return;
// };
// Can you do this without instantiating a new array?

//////////////////////////////////////////////////////////////////////////
// Solution:
var numsArray;

function zerosToEnd(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(nums.length - 1, 0, 0);
      nums.splice(i, 1);
    }
  }
}

numsArray = [1, 0, 2, 0, 4, 0];

console.log("start array = " + numsArray);

zerosToEnd(numsArray);

console.log("end array = " + numsArray);
