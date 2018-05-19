// Now write a recursive function that does the same thing, 
// but it prints them in reverse order.

function print_values(chars){
    if(chars.length > 0){
      console.log(chars.pop());
      return print_values(chars);
    }
  }
  
  console.log(print_values(['h','e','l','l','o']));