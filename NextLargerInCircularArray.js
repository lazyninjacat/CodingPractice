/////////////////////////////////////////////////////////////////////////////////////////
// Next Larger in a Circular Array - AlgoDaily Day 27 Problem
// A circular array is one where the next element of the last element is the first element.

// You know how standard arrays look. Instead of [1, 2, 3, 4], imagine
// the following, where after index 7, we'd move back to index 0.
// Can you write a method nextLargerNumber(nums: array) to print the next
// immediate larger number for every element in the array?
//
// Note: for any element within the circular array, the next immediate larger
// number could be found circularly-- past the end and before it.
// If there is no number greater, return -1.

// Take the following example, with an analysis for each index:

// nextLargerNumber([3, 1, 3, 4])
// [4, 3, 4, -1]
// 3's next greater is 4
// 1's next greater is 3
// 3's next greater is 4 again
// 4 will look to the beginning, but find nothing, so -1

//////////////////////
// Solution Attempt 1

var startArray = [2, 4, 1, 2, 3, 6, 7, 2, 5, 2, 9, 6, 4];
var endArray = [];
var checksDone = false;

function nextLargeNumber() {
  for (var i = 0; i < startArray.length; i++) {
    for (var x = 1; x <= startArray.length; x++) {
      checksDone = false;
      if (x === startArray.length) {
        for (var y = 0; y < i; y++) {
          if (startArray[i] < startArray[y]) {
            endArray.push(startArray[y]);
            break;
          }
        }
      } else if (startArray[i] < startArray[i + x]) {
        endArray.push(startArray[i + x]);
        break;
      }
      checksDone = true;
    }
    if (checksDone && endArray.length !== startArray.length) {
      endArray.push(-1);
    }
  }

  console.log("starting array : " + startArray);
  console.log("solution array : " + endArray);
}

nextLargeNumber();
