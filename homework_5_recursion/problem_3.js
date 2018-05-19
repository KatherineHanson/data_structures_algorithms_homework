// In lecture, we wrote a function, sum_nested(nums), 
// that sums all the numbers in the passed list. 
// Modify the function to support a list of lists.

function sum_nested(nums){
  var sum = 0;

  if (nums.length === 0)
    return 0;
  else{
      sum+=(nums[0].reduce(function(acc, val) { return acc + val; }))
      nums = nums.slice(1);
      return sum + sum_nested(nums);
  }

  return sum;
}

var nested_nums = [[1, 2], [3, 4], [5]];
should_be_fifteen = sum_nested(nested_nums);
console.log(should_be_fifteen);
nested_nums = [[1, 2], [3, 4], [5],[700,80]];
should_be_sevenhundredninetyfive = sum_nested(nested_nums);
console.log(should_be_sevenhundredninetyfive);
nested_nums = [];
should_be_zero = sum_nested(nested_nums);
console.log(should_be_zero);