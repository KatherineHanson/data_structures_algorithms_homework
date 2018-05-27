// Problem 2: A magic index of a list is defined to be the index _i_ such that
// `A[i] == i`. Given a sorted list of distinct integers, write a function to
// find a magic index, if one exists, in the list. If a magic index does not
// exist, the function should return -1. What is your function's efficiency?
// Can you make it more efficient?

// ANSWER: 
// This function's efficiency is n, because in the worst case, 
// you would need to check every element in the array to 
// determine whether it holds the value you are searching for.
// You can make it more efficient by doing a binary search on the array.

function magic_index(nums) {
  var i;

  for(i = 0; i < nums.length; i++){
    if (nums[i] === i)
      return nums[i];
  }
  return -1;
}

var noMagic = [-1,0,1,2,3,4];
var yesMagic = [-1,0,1,2,4,5];
console.log('Should not return a magic index: ', magic_index(noMagic))
console.log('Should return a magic index: ', magic_index(yesMagic))
