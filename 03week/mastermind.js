'use strict';

const assert = require('assert');
var colors = require('colors');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// function printBoard() {
//   for (let i = 0; i < board.length; i++) {
//     console.log(board[i]);
//   }
// }
//
// function generateSolution() {
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, letters.length);
//     solution += letters[randomIndex];
//   }
//   return solution;
// }
//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }
//
// function generateHint(solution, guess) {
//   // your code here
//   var solutionArray = solution.split('');
//   var guessArray = guess.split('');
//   var correctLetterLocation = 0;
//   for (var i = 0; i <solutionArray.length; i++){
//     if (solutionArray[i] === guessArray[i]){
//         correctLetterLocation ++;
//         solutionArray[i] = null;
//     }
//   }
//   var correctLetter = 0;
//
//     for (var y = 0; y < solutionArray.length; y++){
//     var targetIndex = solutionArray.indexOf(guessArray[y]);
//     if (targetIndex > -1){
//       correctLetter++;
//       solutionArray[targetIndex] = null;
//     }
//   }
//   return colors.red(correctLetterLocation) + "-" + colors.white(correctLetter);
// }
//
//
// function mastermind(guess) {
// //  solution = 'abcd'; // Comment this out to generate a random solution
//   // your code here
//   if (guess === solution){
//     return "You guessed it!";
//   }
//   else {
//     if (board.length < 10){
//       var hint = generateHint(solution, guess);
//       board.push(guess + " " + hint);
//       console.log ("Guess Again!");
//     } else {
//       printBoard();
//       console.log("You ran out of turns. The solution is: " + solution);
//     }
// }
// }

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
  return solution;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here
  var solutionArray = generateSolution().split('');
  var guessArray = guess.split('');
  var correctLetterLocation = 0;
  for (var i = 0; i <solutionArray.length; i++){
    if (solutionArray[i] === guessArray[i]){
        correctLetterLocation ++;
        //solutionArray[i] = null;
    }
  }
  var correctLetter = 0;

    for (var y = 0; y < solutionArray.length; y++){
    var targetIndex = solutionArray.indexOf(guessArray[y]);
    if (targetIndex > -1){
      correctLetter++;
      //solutionArray[targetIndex] = null;
    }
  }
  return colors.red(correctLetterLocation) + "-" + colors.white(correctLetter);
}


function mastermind(guess) {
//  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  if (guess === solution){
    return "You guessed it!";
  }
  else {
    if (board.length < 10){
      var hint = generateHint(guess);
      board.push(guess + " " + hint);
      console.log ("Guess Again!");
    } else {
      printBoard();
      console.log("You ran out of turns. The solution is: " + solution);
    }
}
}




function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
