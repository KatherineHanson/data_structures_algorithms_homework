// Implement a function is_palindrome(chars) that 
// takes as input a list of character strings.

function is_palindrome(chars)  {
  var firstChar = chars.shift();
  var lastChar  = chars.pop();
  
  if (chars.length < 2)
    return true;
  else if (firstChar !== lastChar)
    return false;

    return is_palindrome(chars);
}

var a = ['a']
var racecar = ['r','a','c','e','c','a','r'];
var deed = ['d','e','e','d'];
var hello = ['h','e','l','l','o'];
var should_be_true = is_palindrome(a)
console.log('a:', should_be_true);
should_be_true = is_palindrome(racecar)
console.log('racecar:', should_be_true);
should_be_true = is_palindrome(deed)
console.log('deed:', should_be_true);
var should_be_false = is_palindrome(hello)
console.log('hello:', should_be_false);