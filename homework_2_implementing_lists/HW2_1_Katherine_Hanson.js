'use strict';

// This solution based on static array example code provided by Yogi Patel
function StaticArray(size) {
    this.size = size;
    this.data = Array(size).fill(null);
  }
  
  StaticArray.prototype.get = function(index) {
    if (index >= this.size || index < 0) {
      throw new Error('Bad index');
    }
    return this.data[index];
  };
  
  StaticArray.prototype.set = function(index, value) {
    if (index >= this.size || index < 0) {
      throw new Error('Bad index');
    }
    this.data[index] = value;
  };

  StaticArray.prototype.append = function(value) {
    var last = this.size - 1;
    this.data[last] = value;
  };
  
  StaticArray.prototype.toString = function() {
    return '[' + this.data.toString() + ']';
  };
  
  // Checking input and output
  
  var x = new StaticArray(4);
  console.log('Should show 4 nulls:', x.toString());
  x.set(0, 'cats');
  x.set(1, 'dogs');
  console.log('Should show cats, dogs, null, null:', x.toString());
  console.log('Should show dogs:', x.get(1));
  x.append('guinea pigs');
  console.log('Should show cats, dogs, null, guinea pigs:', x.toString());
  console.log('Should show null:', x.get(2));
  x.append('canaries');
  console.log('Should show cats, dogs, null, canaries:', x.toString());
  x.set(1, 'horses');
  console.log('Should show cats, horses, null, canaries:', x.toString());
