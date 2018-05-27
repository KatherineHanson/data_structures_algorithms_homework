// Problem 3: Given an list of size *n*, write a function that finds the majority
// element and returns it. The majority element is the element that appears
// **more than** ⌊n/2⌋ times. You may assume that the elements are integers, the
// list is non-empty, and the majority element always exists.

function majority(nums) {
    var i;
    var key;
    var count = 0;
    var numbers = {};

    for(i = 0; i < nums.length; i++){
      key = nums[i];
      numbers[key] = count++;
    }
    return numbers;
}

var yesMajority = [-1,5,5,5,5,5,5,5,5,5];
console.log('Should return the majority: ', majority(yesMajority))