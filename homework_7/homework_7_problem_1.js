// Homework 7 -- Morse Code

// 1. For our first problem, write a function that converts a given word into
//    Morse Code. Only a single word will be supplied but it may end in an
//    optional punctuation character. For example, "Hello" and "Hello," are both
//    valid inputs to this function.

function encode_word(word) {
  var i;
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

  if(word.length === 0)
    return '';
  else {
    for(i = 0; i < word.length; i++){
      letter = word[i];
      for(let [key, value] of Object.entries(morse)){
        if (letter === key){
          translation+=value;
          translation+=' ';
        }
      } 
    };
    translation = translation.slice(0, translation.length - 1)
    return translation;
  }
}

var blank = '';
var a = 'a';
var is = 'is';
var bananas = 'bananas';
var period_PERIOD = 'period.';
var comma_COMMA = 'comma,';
console.log('Should return \'\' in morse code: ', encode_word(blank));
console.log('Should return \'a\' in morse code: ', encode_word(a));
console.log('Should return \'is\' in morse code: ', encode_word(is));
console.log('Should return \'bananas\' in morse code: ', encode_word(bananas));
console.log('Should return \'period.\' in morse code: ', encode_word(period_PERIOD));
console.log('Should return \'comma,\' in morse code: ', encode_word(comma_COMMA));