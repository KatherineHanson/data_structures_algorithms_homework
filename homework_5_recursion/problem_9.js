// Implement the recursive function reverse_list(l) 
// that takes a list as input and returns a _new_ list 
// containing the elements of l, but in reverse order. 
// Remember that this function should be recursive — no looping!

function reverse_list(l){
  if(l.length === 0)
    return l;
  else
    return reverse_list(l.slice(1)).concat(l[0]);
}

console.log(reverse_list(['h','e','l','l','o']));