// Homework 7 -- Morse Code

// 4. As before, we need the opposite version of the previous function, one that
//    encodes words.

function encode_words(words) {
    var letters = words.split('');
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
    morse[' '] = '/';
  
    if(words.length === 0)
      return '';
    else {
      for(i = 0; i < letters.length; i++){
        letter = letters[i];
        for(let [key, value] of Object.entries(morse)){
          if (letter === key){
            translation+=value;
            translation+=' ';
          }
        } 
      };
      return translation;
    }
  }
  

  var blank = '';
  var one = 'one';
  var one_PERIOD = 'one.';
  var one_two = 'one two';
  var one_two_PERIOD = 'one two.';
  var one_COMMA_two_COMMA_and_three_PERIOD = 'one, two, and three.';
  var first_PERIOD_second_PERIOD_third_PERIOD = 'first. second. third.';

  console.log('Should return \'\' translated to morse code: ', encode_words(blank));
  console.log('Should return \'one\' translated to morse code: ', encode_words(one));
  console.log('Should return \'one.\' translated to morse code: ', encode_words(one_PERIOD));
  console.log('Should return \'one two\' translated to morse code: ', encode_words(one_two));
  console.log('Should return \'one two.\' translated to morse code: ', encode_words(one_two_PERIOD));
  console.log('Should return \'one, two, and three.\' translated to morse code: ', encode_words(one_COMMA_two_COMMA_and_three_PERIOD));
  console.log('Should return \'first. second. third.\' translated to morse code: ', encode_words(first_PERIOD_second_PERIOD_third_PERIOD));