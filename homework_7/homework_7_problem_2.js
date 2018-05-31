// Homework 7 -- Morse Code

// 2. Write a function that does the opposite of the previous one. That is, it
//    decodes a Morse Code sequence into a word.

function decode_word(word) {
    var i;
    var letters = word.split(' ');
    var letter;
    var translation = '';
    var morse = new Object();
  
    morse['a'] = '.-';
    morse['b'] = '-...';
    morse['c'] = '-.-.';
    morse['d'] = '-..';
    morse['e'] = '.';
    morse['f'] = '..-.';
    morse['g'] = '--.';
    morse['h'] = '....';
    morse['i'] = '..';
    morse['j'] = '.---';
    morse['k'] = '-.-';
    morse['l'] = '.-..';
    morse['m'] = '--';
    morse['n'] = '-.';
    morse['o'] = '---';
    morse['p'] = '.--.';
    morse['q'] = '--.-';
    morse['r'] = '.-.';
    morse['s'] = '...';
    morse['t'] = '-';
    morse['u'] = '..-';
    morse['v'] = '...-';
    morse['w'] = '.--';
    morse['x'] = '-..-';
    morse['y'] = '-.--';
    morse['z'] = '--..';
    morse['.'] = '.-.-.-';
    morse[','] = '--..--';
  
    if(letters.length === 0)
      return '';
    else {
      for(i = 0; i < letters.length; i++){
        letter = letters[i];
        for(let [key, value] of Object.entries(morse)){
          if (letter === value){
            translation+=key;
          }
        } 
      };
      return translation;
    }
  }
  

  var blank = '';
  var a = '.-';
  var is = '.. ...';
  var bananas = '-... .- -. .- -. .- ...';
  var period_PERIOD = '.--. . .-. .. --- -.. .-.-.-';
  var comma_COMMA ='-.-. --- -- -- .- --..--';

  console.log('Should return \'\' translated from morse code: ', decode_word(blank));
  console.log('Should return \'a\' translated from morse code: ', decode_word(a));
  console.log('Should return \'is\' translated from morse code: ', decode_word(is));
  console.log('Should return \'bananas\' translated from morse code: ', decode_word(bananas));
  console.log('Should return \'period.\' translated from morse code: ', decode_word(period_PERIOD));
  console.log('Should return \'comma,\' translated from morse code: ', decode_word(comma_COMMA));