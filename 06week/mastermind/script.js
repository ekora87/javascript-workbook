'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let moveValue;
  let countRow = 0;
  let countColumn = 0;
  let solutionArray = [];
  let guessArray = [];
  let correctArray = [];
  let boolean = false;
  let letters = ['red', 'green', 'blue', 'brown', 'purple', 'pink', 'yellow', 'orange'];

  generateSolution();
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function generateSolution() {
    let i = 0;
    while (solutionArray.length < 4) {
      const randomIndex = getRandomInt(0, letters.length);
      if (letters[randomIndex]) {
      solutionArray[i] = letters[randomIndex];
      letters[randomIndex] = "";
      i++;}
    }
    return solutionArray;
  }

  function generateHint(guess) {
    let correctColorLocation = 0;
    let correctColor = 0;
    let solution = solutionArray;
    for (var i = 0; i <solutionArray.length; i++){
      if (solution[i] === guess[i]){
          correctColorLocation ++;
      } else {
        var targetIndex = solutionArray.indexOf(guess[i]);
        if (targetIndex > -1){
          correctColor++;
        }
      }
    }
    correctArray[0] = correctColorLocation;
    correctArray[1] = correctColor;
    return correctArray;
  }

  function checkForWin(guess) {
    if (correctArray[0] === 4) {
      return true;
    }
  }

  document.querySelectorAll('.selection-container > [data-cell]').forEach ((div) => {
    div.addEventListener('click', (e) => {
      if (!boolean) {
      moveValue = e.target.parentNode.attributes[0].value;
      moved = { target: e.target, parent: e.target.parentNode};
      if (moved.target === moved.parent.children[0]) {
        moved.parent.removeChild(moved.target);
        boolean = true;
      }
    }
    });
  });
  let container = document.querySelector('.container');
  container.addEventListener('click', (e) => {
    let num = parseInt(e.target.parentNode.attributes[0].value);
      if (e.target.parentNode.parentNode === container.children[countRow] && e.target.attributes[0].value === 'circle') {
        e.target.className += " " + moveValue;
        guessArray[num] = moveValue;
        countColumn++;
             } else {
               alert ('Not Here');
             }
             let result = container.children[countRow].children[4];

            if (countColumn === 4) {
              generateHint(guessArray);
              let total = correctArray[0] + correctArray[1];
              if (checkForWin(guessArray)) {
                document.querySelector('#announce-winner').innerHTML = "You Guessed It. Would you like to play again?";
              } else {
                    if (correctArray[0] != 0) {
                      for (let i = 0; i < correctArray[0]; i++){
                        result.children[i].className += " " + 'result-white';
                      }
                    }
                    if (correctArray[1] != 0) {
                      for (let y = correctArray[0]; y < total; y++ ) {
                        result.children[y].className += " " + 'result-black';
                      }
                    }
              }
            countRow++;
            countColumn = 0;
            guessArray = [];
            generateHint(guessArray);
            if (countRow === 10) {
              document.querySelector('#announce-winner').innerHTML = "You ran out of turn. Would you like to play again?";
            }
          }
            moved.parent.appendChild(moved.target);
            boolean = false;
    });

    document.querySelector('#clear').addEventListener ('click', (e) =>{
        window.parent.location = window.parent.location.href;
    });
    document.querySelector('#easy').addEventListener ('click', (e) =>{
        alert (solutionArray);
    });


});
