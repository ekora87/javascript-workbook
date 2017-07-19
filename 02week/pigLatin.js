'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here
  word = word.toLowerCase().trim();
  if (word[0] === 'a' || word[0] === 'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
    return word + 'yay';
  }
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var resultsObj = [];
  for (var i = 0; i < vowels.length; i++) {
    if (word.indexOf(vowels[i]) > 0) {
      resultsObj.push(word.indexOf(vowels[i]));
    }
  }
  if (resultsObj.length > 1) {
    var vowelIndex = Math.min.apply(null, resultsObj);
  } else {
    vowelIndex = resultsObj[0];
  }
  var firstPart = word.slice(0, vowelIndex);
  var theRest = word.slice(vowelIndex, word.length);
  return theRest + firstPart + 'ay';
}

function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
