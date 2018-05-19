// Convert this iterative function to be recursive. Same idea as the previous question — think it through, maybe use some paper and pencil, and convert it directly.
// def iterer(n):
//   x = 1
//   while n > 1:
//     x += 1
//     n = n / 2
  
//   return x

// First converting to JavaScript
// function iterer(n){
//   var x = 1;
//   while (n > 1){
//     x += 1;
//     n = n / 2;
//   }
  
//   return x;
// }

// console.log('iterer(1) should return 1: ',iterer(1));
// console.log('iterer(2) should return 2: ',iterer(2));
// console.log('iterer(3) should return 3: ',iterer(3));
// console.log('iterer(4) should return 3: ',iterer(4));
// console.log('iterer(5) should return 4: ',iterer(5));
// console.log('iterer(6) should return 4: ',iterer(6));
// console.log('iterer(7) should return 4: ',iterer(7));
// console.log('iterer(8) should return 4: ',iterer(8));
// console.log('iterer(9) should return 5: ',iterer(9));
// console.log('iterer(10) should return 5: ',iterer(10));
// console.log('iterer(11) should return 5: ',iterer(11));
// console.log('iterer(12) should return 5: ',iterer(12));
// console.log('iterer(13) should return 5: ',iterer(13));
// console.log('iterer(14) should return 5: ',iterer(14));
// console.log('iterer(15) should return 5: ',iterer(15));
// console.log('iterer(16) should return 5: ',iterer(16));
// console.log('iterer(17) should return 6: ',iterer(17));
// console.log('iterer(18) should return 6: ',iterer(18));
// console.log('iterer(19) should return 6: ',iterer(19));
// console.log('iterer(20) should return 6: ',iterer(20));
// console.log('iterer(21) should return 5: ',iterer(21));
// console.log('iterer(22) should return 6: ',iterer(22));
// console.log('iterer(23) should return 6: ',iterer(23));
// console.log('iterer(24) should return 6: ',iterer(24));
// console.log('iterer(25) should return 6: ',iterer(25));
// console.log('iterer(26) should return 6: ',iterer(26));
// console.log('iterer(27) should return 6: ',iterer(27));
// console.log('iterer(28) should return 6: ',iterer(28));
// console.log('iterer(29) should return 6: ',iterer(29));
// console.log('iterer(30) should return 6: ',iterer(30));
// console.log('iterer(31) should return 6: ',iterer(31));
// console.log('iterer(32) should return 6: ',iterer(32));

// Then converting to recursive
function iterer(n){
  if(n > 1)
    return iterer(Math.ceil(n / 2)) + 1;
  
  return n;
}

console.log('iterer(1) should return 1: ',iterer(1));
console.log('iterer(2) should return 2: ',iterer(2));
console.log('iterer(3) should return 3: ',iterer(3));
console.log('iterer(4) should return 3: ',iterer(4));
console.log('iterer(5) should return 4: ',iterer(5));
console.log('iterer(6) should return 4: ',iterer(6));
console.log('iterer(7) should return 4: ',iterer(7));
console.log('iterer(8) should return 4: ',iterer(8));
console.log('iterer(9) should return 5: ',iterer(9));
console.log('iterer(10) should return 5: ',iterer(10));
console.log('iterer(11) should return 5: ',iterer(11));
console.log('iterer(12) should return 5: ',iterer(12));
console.log('iterer(13) should return 5: ',iterer(13));
console.log('iterer(14) should return 5: ',iterer(14));
console.log('iterer(15) should return 5: ',iterer(15));
console.log('iterer(16) should return 5: ',iterer(16));
console.log('iterer(17) should return 6: ',iterer(17));
console.log('iterer(18) should return 6: ',iterer(18));
console.log('iterer(19) should return 6: ',iterer(19));
console.log('iterer(20) should return 6: ',iterer(20));
console.log('iterer(21) should return 6: ',iterer(21));
console.log('iterer(22) should return 6: ',iterer(22));
console.log('iterer(23) should return 6: ',iterer(23));
console.log('iterer(24) should return 6: ',iterer(24));
console.log('iterer(25) should return 6: ',iterer(25));
console.log('iterer(26) should return 6: ',iterer(26));
console.log('iterer(27) should return 6: ',iterer(27));
console.log('iterer(28) should return 6: ',iterer(28));
console.log('iterer(29) should return 6: ',iterer(29));
console.log('iterer(30) should return 6: ',iterer(30));
console.log('iterer(31) should return 6: ',iterer(31));
console.log('iterer(32) should return 6: ',iterer(32));