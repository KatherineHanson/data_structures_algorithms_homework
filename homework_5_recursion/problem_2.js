// Now, implement is_palindrome(string) from the previous question, 
// but instead of a list of characters as input, 
// have your new function take a string.

function is_palindrome(string)  {
    var array = string.split('');
    var firstChar = array.shift();
    var lastChar  = array.pop();
    
    if (array.length < 2)
      return true;
    else{
      if (firstChar !== lastChar)
        return false;
  
      return is_palindrome(array.join(''));
    }
  }
  
  var should_be_true = is_palindrome('a')
  console.log('a:', should_be_true);
  should_be_true = is_palindrome('racecar')
  console.log('racecar:', should_be_true);
  should_be_true = is_palindrome('deed')
  console.log('deed:', should_be_true);
  var should_be_false = is_palindrome('hello')
  console.log('hello:', should_be_false);