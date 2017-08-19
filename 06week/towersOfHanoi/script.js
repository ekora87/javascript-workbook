'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let movedValue;
  let lastValue;
  let num;

  function checkForWin() {
     if (document.querySelector('[data-stack = "3"]').children.length === 4){
       document.querySelector('#announce-game-won').innerHTML = "You Won";
     }
  }
  document.querySelectorAll('[data-block]').forEach ((div) => {
    div.addEventListener('click', (e) => {
      movedValue = e.target.attributes[0].value;
      e.stopPropagation;
      moved = { target: e.target, parent: e.target.parentNode};
      if (moved.target === moved.parent.children[moved.parent.children.length - 1]) {
        moved.parent.removeChild(moved.target);
      } else {
        alert ("You can't click here. Please click on the last block");
      }
    });
  });

  document.querySelectorAll('[data-stack]').forEach ((div) => {
      div.addEventListener ('click' ,(e) => {
         num = e.target.children.length;
         if (num > 0) {
           lastValue = e.target.children[num-1].attributes[0].value;
        }
        if (!num || (parseInt(movedValue) < parseInt(lastValue))) {
          e.target.appendChild(moved.target);
        } else {
           alert ('This block cannot goes here');
           moved.parent.appendChild(moved.target);
        }
        checkForWin();
      });
 });
});
