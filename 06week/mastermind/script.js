'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let moveValue;
  let countRow = 0;
  let countColumn = 0;
  let solution = '';
  let letters = ['red', 'green', 'blue', 'brown', 'purple', 'pink', 'yellow', 'orange'];
  LEt guessArray = []
  let selection = document.querySelector('.selection-container');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function generateSolution {
    for (let i = 0; i < 4; i++) {
      const randomIndex = getRandomInt(0, letters.length);
      solution += letters[randomIndex];
    }
    console.log("Solution: " + solution);
    return solution;
  }
  document.querySelectorAll('.colors').forEach ((div) => {
    div.addEventListener('click', (e) => {
      moveValue = e.target.parentNode.attributes[0].value;
      moved = { target: e.target, parent: e.target.parentNode};
      //debugger;
      moved.parent.removeChild(moved.target);
      //console.log(moveValue);

    });
  });

  document.querySelectorAll('.row > [data-cell]').forEach((div) => {
      //debugger;
      div.addEventListener('click', (e2) => {
                if (parseInt(e2.target.parentNode.attributes[0].value) === countRow && countColumn != 4){
                    //alert(moveValue);
                    // if (!countColumn % 4) {
                      e2.target.className += " " + moveValue;
                       countColumn++;
                     } else {
                       alert ('Not Here');
                     }
                     if (countColumn === 4) {
                       countRow++;
                       countColumn = 0;
                     }

                    moved.parent.appendChild(moved.target);
                    //debugger;
                    //counter();
              });
    });



//document.querySelector

// document.querySelectorAll('.row').forEach ((div) => {
//   div.addEventListener('click', (e) => {
//
//     //console.log(containerLength);
//     debugger;
//     //debugger;
//     for (let i = 0; i < 10; i++ ){
//       for (let y = 0; y < 4; y++) {
//         e.target.appendChild(moved.target);
//       }
//       e.target.parent[i].appendChild(moved.target);
//
//       debugger;
//     }
//     //e.target.appendChild(moved.target);
//   });
// });

});
