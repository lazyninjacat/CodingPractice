/////////////////////////////////////////////////////////////////////////
// Proplem Statement:

//////////////////////////////////////////////////////////////////////////
// Solution:

// Brute Force

// let array1 = [5, 2, 1];
// let array2 = [5, 2, 3];
// let targetValue = 10;
// let pairExists = false;
// let arr1Val = -1;
// let arr2Val = -1;

// function sumOfTwo(arr1, arr2, tarVal) {
//   for (var i = 0; i < arr1.length; i++) {
//     var needed_value = tarVal - arr1[i];
//     for (var x = 0; x < arr2.length; x++) {
//       if (arr2[x] === needed_value) {
//         pairExists = true;
//         arr1Val = arr1[i];
//         arr2Val = arr2[x];
//         break;
//       }
//     }
//   }
// }

// sumOfTwo(array1, array2, targetValue);
// console.log(`Array 1 : ${array1}`);
// console.log(`Array 2 : ${array2}`);
// console.log("Pair exists = " + pairExists);
// console.log("Array 1 Value = " + arr1Val);
// console.log("Array 2 Value = " + arr2Val);

// Better

let array1 = [5, 2, 1];
let array2 = [2, 2, 3, 4, 1, 7];
let targetValue = 10;

let pairExists = false;
let arr1Val = -1;
let arr2Val = -1;

var hash = {};

var checkValue = function(value) {
  return hash[value] === true;
};

function sumOfTwo(arr1, arr2, tarVal) {
  for (var i = 0; i < arr1.length; i++) {
    var difference = tarVal - arr1[i];
    hash[difference] = true;
  }
  console.log(hash);
  for (var x = 0; x < arr2.length; x++) {
    if (checkValue(arr2[x])) {
      pairExists = true;
      arr1Val = tarVal - arr2[x];
      arr2Val = arr2[x];
    }
    break;
  }
}

sumOfTwo(array1, array2, targetValue);
console.log(`Array 1 : ${array1}`);
console.log(`Array 2 : ${array2}`);
console.log("Pair exists = " + pairExists);
console.log("Array 1 Value = " + arr1Val);
console.log("Array 2 Value = " + arr2Val);
