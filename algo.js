1/////////////////////////
function SentenceLength(sentence){
    return sentence.length;
  }
  SentenceLength("the number of characters.")
25

2////////////////////////
function WordNumber(sentence) {
    var words = sentence.trim().split(/\s+/);
  
    return words.length;
  }
  undefined
  WordNumber("assuming that the words are separated by a single space.")
  10

  3///////////////////////
  function VowelsNumber(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
  
    var lowerCaseSentence = sentence.toLowerCase();
  
    for (var i = 0; i < lowerCaseSentence.length; i++) {
      if (vowels.includes(lowerCaseSentence[i])) {
        count++;
      }
    }
  
    return count;
  }
  
  undefined
  VowelsNumber("the number of vowels")
  6
  