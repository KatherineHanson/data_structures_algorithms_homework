// Problem 3: Given an list of size *n*, write a function that finds the majority
// element and returns it. The majority element is the element that appears
// **more than** ⌊n/2⌋ times. You may assume that the elements are integers, the
// list is non-empty, and the majority element always exists.

function majority(nums) {
    var i;
    var x;
    var k;
    var count = 0;
    var numbers = {};

    for(i = 0; i < nums.length; i++){
      k = nums[i];
      numbers[k] = count++;
    }

    for(let [key, value] of Object.entries(numbers)){
      if(value > (nums.length / 2))
        return key;
      return -1;
    } 
}

var yesMajority = [-1,5,5,5,5,5,5,5,5,5];
console.log('Should return the majority element: ', majority(yesMajority))