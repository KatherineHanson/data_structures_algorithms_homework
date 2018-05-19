// Write a recursive function that takes a list of integers 
// as input and prints each value, one per line, in order. 
// That's it, no catch.

function print_values(chars){
  if(chars.length > 0){
    console.log(chars.shift());
    return print_values(chars);
  }
}

console.log(print_values(['h','e','l','l','o']));