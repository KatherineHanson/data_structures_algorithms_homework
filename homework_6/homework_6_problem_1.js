// Problem 1: Given a list of strings, write a function that returns a list of
// the strings sorted by their _length_. If the length of any of the strings are
// equal, they should be in the order they were in the original list (i.e., the
// sort should be stable).


function merge(left, right) {
    var result = [];
    
    while(left.length > 0 && right.length > 0){
      if(left[0].length < right[0].length)
        result.push(left.shift());
      else if(left[0].length > right[0].length)
        result.push(right.shift());
      else {
        result.push(right.shift());
        result.push(left.shift())
      }
    }
    result = result.concat(left).concat(right);
    return result;
}

function sorted_by_length(strings) {
    if (strings.length < 2)
      return strings;
    var midpoint = Math.floor(strings.length / 2);
    var right = sorted_by_length(strings.slice(0, midpoint));
    var left = sorted_by_length(strings.slice(midpoint));
    
    return merge(left, right);
  }

var arr = ['dog','galaxy','hi','apotheosis','bye','butter','glass','cat'];
console.log(arr);
console.log(sorted_by_length(arr));