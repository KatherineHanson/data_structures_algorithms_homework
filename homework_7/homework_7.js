'use strict';

// Homework 7 -- Morse Code

function create_morse() {
  var i;
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','.',',',' '];
  var encoded_chars = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','.-.-.-','--..--','/'];
  var morse = new Object();
  for (i = 0; i < alphabet.length; i++){
    morse[alphabet[i]] = encoded_chars[i];
  }
  return morse;
}

// 1. For our first problem, write a function that converts a given word into
//    Morse Code. Only a single word will be supplied but it may end in an
//    optional punctuation character. For example, "Hello" and "Hello," are both
//    valid inputs to this function.

function encode_word(word, morse) {
  var i;
  var letter;
  var translation = '';


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

// 2. Write a function that does the opposite of the previous one. That is, it
//    decodes a Morse Code sequence into a word.

function decode_word(word, morse) {
  var i;
  var letters = word.split(' ');
  var letter;
  var translation = '';

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

// 3. Now that we're able to encode and decode words to Morse, we'd like to be
//    able to convert entire sentences. Utilizing the previous function, write
//    another function that decodes a Morse Code into a sequence of words.

function decode_words(encoded_words, morse) {
  var i;
  var letters = encoded_words.split(' ');
  var letter;
  var translation = '';

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

// 4. As before, we need the opposite version of the previous function, one that
//    encodes words.
function encode_words(words) {
  var letters = words.split('');
  var i;
  var letter;
  var translation = '';

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

// 5. Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.
// Return the number of different transformations among all words we have.
// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation: 
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."
// There are 2 different transformations, "--...-." and "--...--.".
// Note:
// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.
function unique_morse_representations(words) {
  if (words.length > 100)
    return "Too long! Enter a shorter array of words."
  var i, x;
  var arr = [];
  for (i = 0; i < words.length; i++){
    if (words[i].length < 1 || words[i].length > 12)
      return 'Invalid input! Each word\'s length should range from 1 to 12.'
    if (!arr.includes(encode_word(words[i], morse)))
      arr.push(encode_word(words[i], morse));
  }
  return arr.length;
};


// Creating Morse
var morse = create_morse();

// Checking encode_word function
var blank = '';
var a = 'a';
var is = 'is';
var bananas = 'bananas';
var period_PERIOD = 'period.';
var comma_COMMA = 'comma,';
console.log('Should return \'\' translated to morse code: ', encode_word(blank, morse));
console.log('Should return \'a\' translated to morse code: ', encode_word(a, morse));
console.log('Should return \'is\' translated to morse code: ', encode_word(is, morse));
console.log('Should return \'bananas\' translated to morse code: ', encode_word(bananas, morse));
console.log('Should return \'period.\' translated to morse code: ', encode_word(period_PERIOD, morse));
console.log('Should return \'comma,\' translated to morse code: ', encode_word(comma_COMMA, morse));
console.log();

// Checking decode_word function
blank = '';
a = '.-';
is = '.. ...';
bananas = '-... .- -. .- -. .- ...';
period_PERIOD = '.--. . .-. .. --- -.. .-.-.-';
comma_COMMA ='-.-. --- -- -- .- --..--';

console.log('Should return \'\' translated from morse code: ', decode_word(blank, morse));
console.log('Should return \'a\' translated from morse code: ', decode_word(a, morse));
console.log('Should return \'is\' translated from morse code: ', decode_word(is, morse));
console.log('Should return \'bananas\' translated from morse code: ', decode_word(bananas, morse));
console.log('Should return \'period.\' translated from morse code: ', decode_word(period_PERIOD, morse));
console.log('Should return \'comma,\' translated from morse code: ', decode_word(comma_COMMA, morse));
console.log();

// Checking decode_words function
blank = '';
var one = '--- -. .';
var one_PERIOD = '--- -. . .-.-.-';
var one_two = '--- -. . / - .-- ---';
var one_two_PERIOD = '--- -. . / - .-- --- .-.-.-';
var one_COMMA_two_COMMA_and_three_PERIOD = '--- -. . --..-- / - .-- --- --..-- / .- -. -.. / - .... .-. . . .-.-.-';
var first_PERIOD_second_PERIOD_third_PERIOD = '..-. .. .-. ... - .-.-.- / ... . -.-. --- -. -.. .-.-.- / - .... .. .-. -.. .-.-.-';

console.log('Should return \'\' translated from morse code: ', decode_words(blank, morse));
console.log('Should return \'one\' translated from morse code: ', decode_words(one, morse));
console.log('Should return \'one.\' translated from morse code: ', decode_words(one_PERIOD, morse));
console.log('Should return \'one two\' translated from morse code: ', decode_words(one_two, morse));
console.log('Should return \'one two.\' translated from morse code: ', decode_words(one_two_PERIOD, morse));
console.log('Should return \'one, two, and three.\' translated from morse code: ', decode_words(one_COMMA_two_COMMA_and_three_PERIOD, morse));
console.log('Should return \'first. second. third.\' translated from morse code: ', decode_words(first_PERIOD_second_PERIOD_third_PERIOD, morse));
console.log();

// Checking encode_words function
blank = '';
one = 'one';
one_PERIOD = 'one.';
one_two = 'one two';
one_two_PERIOD = 'one two.';
one_COMMA_two_COMMA_and_three_PERIOD = 'one, two, and three.';
first_PERIOD_second_PERIOD_third_PERIOD = 'first. second. third.';

console.log('Should return \'\' translated to morse code: ', encode_words(blank));
console.log('Should return \'one\' translated to morse code: ', encode_words(one));
console.log('Should return \'one.\' translated to morse code: ', encode_words(one_PERIOD));
console.log('Should return \'one two\' translated to morse code: ', encode_words(one_two));
console.log('Should return \'one two.\' translated to morse code: ', encode_words(one_two_PERIOD));
console.log('Should return \'one, two, and three.\' translated to morse code: ', encode_words(one_COMMA_two_COMMA_and_three_PERIOD));
console.log('Should return \'first. second. third.\' translated to morse code: ', encode_words(first_PERIOD_second_PERIOD_third_PERIOD));
console.log();

// Checking unique_morse_representations function
var top_girl_names = ['Emma','Olivia','Ava','Isabella','Sophia','Amelia','Mia','Charlotte','Harper','Mila','Aria','Ella','Evelyn','Avery','Abigail','Emily','Riley','Luna','Scarlett','Chloe','Layla','Sofia','Lily','Ellie','Zoey','Madison','Elizabeth','Grace','Penelope','Victoria','Nora','Bella','Aubrey','Hannah','Camila','Stella','Paisley','Savannah','Addison','Skylar','Maya','Natalie','Emilia','Elena','Nova','Eva','Violet','Niamey','Audrey','Zoe','Brooklyn','Lucy','Hailey','Eleanor','Lillian','Aaliyah','Leah','Claire','Alice','Sarah','Kennedy','Kinsley','Sophie','Adeline','Arya','Willow','Gabriella','Quinn','Naomi','Peyton','Anna','Eliana','Isla','Everly','Ariana','Maria','Julia','Adalynn','Rylee','Athena','Cora','Valentina','Aubree','Nevaeh','Caroline','Autumn','Gianna','Brielle','Ruby','Serenity','Piper','Mackenzie','Delilah','Sadie','Jade','Clara','Emery','Isabelle','Ivy','Hadley','Arianna','Kaylee','Liliana','Leilani'];
var top_boy_names = ['Liam','Noah','Noah','Oliver','Logan','Mason','Lucas','Elijah','Ethan','James','Aiden','Carter','Sebbastian','Alexander','Jackson','Michael','Michael','Michael','Jacob','Benjamin','William','Daniel','Luke'];
var invalid_top_boy_names_1 = ['','Noah','Noah','Oliver','Logan','Mason','Lucas','Elijah','Ethan','James','Aiden','Carter','Sebbastian','Alexander','Jackson','Michael','Michael','Michael','Jacob','Benjamin','William','Daniel','Luke'];
var invalid_top_boy_names_2 = ['Noah','Noah','Oliver','Logan','Mason','Lucas','Elijah','Ethan','James','Aiden','Carter','Sebbastian','Alexander','Jackson','Michael','Michael','Michael','Jacob','Benjamin','William','Daniel','Luke','Supercalifragilisticexpialidocious'];
console.log('The top_girl_names array has the following length: ', top_girl_names.length);
console.log('The top_girl_names array should be invalid input because of its length: ', unique_morse_representations(top_girl_names));
console.log('The top_boy_names array should return the number of different transformations for it: ', unique_morse_representations(top_boy_names));console.log(unique_morse_representations(invalid_top_boy_names_1));
console.log(unique_morse_representations(invalid_top_boy_names_2));