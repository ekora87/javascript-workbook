'use strict';
let playerTurn = '';
let winCombo = [
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['0', '4', '8'],
  ['2', '4', '6']
];

function checkForWin () {
  for (let i = 0; i < winCombo.length; i++) {
    if ((document.querySelector('[data-cell= "' + winCombo[i][0] + '"]').innerHTML === playerTurn) &&
        (document.querySelector('[data-cell= "' + winCombo[i][1] + '"]').innerHTML === playerTurn) &&
        (document.querySelector('[data-cell= "' + winCombo[i][2] + '"]').innerHTML === playerTurn)) {
      document.querySelector('#announce-winner').innerHTML = 'Player ' + playerTurn + ' Won. The Game Is Over. Please Clear The Board To Restart The Game';
      return true;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let toggle = true;
  document.querySelectorAll('[data-cell]').forEach((div) => {
    div.addEventListener('click', (e) => {
      if (!e.target.innerHTML) {
        e.target.innerHTML = toggle ? 'X' : 'O';
        playerTurn = e.target.innerHTML;
        toggle = !toggle;
      } else {
        alert("You Can't Click Here");
      }
      checkForWin();
    });
  });

  document.querySelector('button').addEventListener ('click', (e) =>{
    document.querySelector('#announce-winner').innerHTML ='';
    document.querySelectorAll('[data-cell]').forEach((div) => {
      div.innerHTML = '';
    });
  });
});
