// Homework 7 -- Morse Code

// 3. Now that we're able to encode and decode words to Morse, we'd like to be
//    able to convert entire sentences. Utilizing the previous function, write
//    another function that decodes a Morse Code into a sequence of words.

function decode_words(encoded_words) {
    var i;
    var letters = encoded_words.split(' ');
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
  
    if(encoded_words.length === 0)
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
  var one = '--- -. .';
  var one_PERIOD = '--- -. . .-.-.-';
  var one_two = '--- -. . / - .-- ---';
  var one_two_PERIOD = '--- -. . / - .-- --- .-.-.-';
  var one_COMMA_two_COMMA_and_three_PERIOD = '--- -. . --..-- / - .-- --- --..-- / .- -. -.. / - .... .-. . . .-.-.-';
  var first_PERIOD_second_PERIOD_third_PERIOD = '..-. .. .-. ... - .-.-.- / ... . -.-. --- -. -.. .-.-.- / - .... .. .-. -.. .-.-.-';

  console.log('Should return \'\' translated from morse code: ', decode_words(blank));
  console.log('Should return \'one\' translated from morse code: ', decode_words(one));
  console.log('Should return \'one.\' translated from morse code: ', decode_words(one_PERIOD));
  console.log('Should return \'one two\' translated from morse code: ', decode_words(one_two));
  console.log('Should return \'one two.\' translated from morse code: ', decode_words(one_two_PERIOD));
  console.log('Should return \'one, two, and three.\' translated from morse code: ', decode_words(one_COMMA_two_COMMA_and_three_PERIOD));
  console.log('Should return \'first. second. third.\' translated from morse code: ', decode_words(first_PERIOD_second_PERIOD_third_PERIOD));