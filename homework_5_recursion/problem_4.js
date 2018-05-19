// Convert the following recursive function to be iterative. 
// Note that you can’t actually run this as you don’t know 
// what the code for node is (other than seeing it has a left 
// attribute). The idea is that you should be able to understand 
// its behaviour and convert it to an iterative version directly.
// def recurer(node):
//   if node.left:
//     return recurer(node.left)
//   else:
//     return node

// First converting to JavaScript
function recurer(node){
  if (node.left)
    return recurer(node.left);
  else
    return node;
}

// Then converting to recursive
function recurer(node){
    while(node.left){
      node = node.left;
    }
      return node;
  }