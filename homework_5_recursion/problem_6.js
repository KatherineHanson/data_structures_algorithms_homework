// A child is running up a staircase with n steps 
// and can hop either 1 step, 2 steps, or 3 steps at a time. 
// Implement a method, step_ways(n) to count 
// how many possible ways the child can run up _n_ stairs. 
// For example, step_ways(4) should return 7 since a child 
// can go up the stairs in the following combinations:
// 1 + 1 + 1 + 1
// 1 + 1 + 2
// 1 + 2 + 1
// 1 + 3
// 2 + 1 + 1
// 2 + 2
// 3 + 1

function step_ways(n){
  if (n === 1)
    return 1;
  else if (n === 2)
    return 2;
  else if (n === 3)
    return 4;
  else
    return step_ways(n-1) +  step_ways(n-2) +  step_ways(n-3);
}

var should_be_one = step_ways(1);
console.log(should_be_one);
var should_be_two = step_ways(2);
console.log(should_be_two);
var should_be_four = step_ways(3);
console.log(should_be_four);
var should_be_seven = step_ways(4);
console.log(should_be_seven);
var should_be_thirteen = step_ways(5);
console.log(should_be_thirteen);
var should_be_twentyfour = step_ways(6);
console.log(should_be_twentyfour);
var should_be_fortyfour = step_ways(7);
console.log(should_be_fortyfour);
var should_be_eightyone = step_ways(8);
console.log(should_be_eightyone);
var should_be_onefortynine = step_ways(9);
console.log(should_be_onefortynine);
var should_be_twoseventyfour = step_ways(10);
console.log(should_be_twoseventyfour);