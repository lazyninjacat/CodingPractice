// The setup is the same as Two Sum-- you're given an array of numbers,
// and a "goal" number.

// Write a method to return an array of the indexes of the two elements
// in the array that sum up to the goal. If there are no such elements,
// return an empty array.

// The caveat here is that the numbers are guaranteed to be sorted.

// So let's say our goal number was 10. Our numbers to sum to it would
// be 3 and 7, and their indices 1 and 2 respectively.

// let arr = [1, 3, 7, 9, 11];
// let goal = 10;
// twoSum(arr, goal);
// [1, 2]
// Is there an efficient way to figure this out?

var startArray = [1, 3, 7, 9, 11];
var endArray = [];
var goal = 10;

function twoSum() {
  for (i = 0; i < startArray.length; i++) {
    if (startArray[i] + startArray[i + 1] === goal) {
      endArray.push(i);
      endArray.push(i + 1);
    }
  }
}

twoSum();

console.log("Start Array = " + startArray);
console.log("Solution = " + endArray);
