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
  // let guessCount = 0;
  let letters = ['red', 'green', 'blue', 'brown', 'purple', 'pink', 'yellow', 'orange'];
  // let selection = document.querySelector('.selection-container');
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

    console.log("Solution: " + solutionArray);
    return solutionArray;
  }

  function generateHint(guess) {
    // your code here
    //var solutionArray = solution.split('');
    // console.log("Solution array: " + solutionArray);
    // var guessArray = guess.split('');

    let correctColorLocation = 0;
    let correctColor = 0;
    let solution = solutionArray;
    for (var i = 0; i <solutionArray.length; i++){
      if (solution[i] === guess[i]){
          correctColorLocation ++;
          //solution[i] = null;

      } else {
        var targetIndex = solutionArray.indexOf(guess[i]);
        if (targetIndex > -1){
          correctColor++;
          //solution[targetIndex] = null;
        }
      }
    }
    correctArray[0] = correctColorLocation;
    correctArray[1] = correctColor;
    // console.log('Wrong location: ' + correctColor);
    // console.log('correct: ' + correctColorLocation);
    console.log('Old array: ' + correctArray);

      return correctArray;

  }

  function checkForWin(guess) {


    if (correctArray[0] === 4) {
      return true;
    } else {
      return false;
    }

  }

  // function mastermind(guess) {
  // //  solution = 'abcd'; // Comment this out to generate a random solution
  //   // your code here
  //   let counter = 0;
  //   for (let i=0; i < 4; i++) {
  //     if (guess[i] === solutionArray[i]) {
  //       counter++;
  //     }
  //   }
  //   if (counter = 4){
  //     console.log("You guessed it!");
  //   }
  // //   else {
  // //     if (board.length < 10){
  // //       var hint = generateHint(guess);
  // //       board.push(guess + " " + hint);
  // //       console.log ("Guess Again!");
  // //     } else {
  // //       printBoard();
  // //       console.log("You ran out of turns. The solution is: " + solution);
  // //     }
  // // }
  // }

  document.querySelectorAll('.selection-container > [data-cell]').forEach ((div) => {
    div.addEventListener('click', (e) => {
      moveValue = e.target.parentNode.attributes[0].value;
      moved = { target: e.target, parent: e.target.parentNode};
      //debugger;
      moved.parent.removeChild(moved.target);
      //console.log(moveValue);

    });
  });
  let container = document.querySelector('.container');
  container.addEventListener('click', (e) => {
      //debugger;
      // let child = document.querySelector('.container').children[countRow];
      // debugger;
    //  debugger;
    let num = parseInt(e.target.parentNode.attributes[0].value);
    console.log(num);
      if (e.target.parentNode.parentNode === container.children[countRow]) {
        e.target.className += " " + moveValue;
        guessArray[num] = moveValue;
        countColumn++;
             } else {
               alert ('Not Here');
             }
             let result = container.children[countRow].children[4];
             //debugger;
             //document.querySelector('.hint'+[countRow]);
             //debugger;
             //let white = document.getElementById('result-white');
            // debugger;

            if (countColumn === 4) {
              generateHint(guessArray);
              if (!checkForWin(guessArray)) {

                let total = correctArray[0] + correctArray[1];


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
            }

            //debugger;

               console.log('Correct: ' + correctArray);
               console.log(guessArray);
               console.log(solutionArray);




              // mastermind(guessArray);

             moved.parent.appendChild(moved.target);
    });

    // document.querySelectorAll('.row > [data-cell]').forEach((div) => {
    //     //debugger;
    //     div.addEventListener('click', (e2) => {
    //               if (parseInt(e2.target.parentNode.attributes[0].value) === countRow && countColumn != 4){
    //                   //alert(moveValue);
    //                   // if (!countColumn % 4) {
    //                     e2.target.className += " " + moveValue;
    //                     debugger;
    //
    //                     guessArray[guessCount] = moveValue;
    //                     countColumn++;
    //                     guessCount++;
    //
    //                      generateHint(guessArray);
    //                    } else {
    //                      alert ('Not Here');
    //                    }
    //                    if (countColumn === 4) {
    //                      countRow++;
    //                      countColumn = 0;
    //                    }
    //
    //                   moved.parent.appendChild(moved.target);
    //                   //debugger;
    //                   //counter();
    //             });
    //   });

});
