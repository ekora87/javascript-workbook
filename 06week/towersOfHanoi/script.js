'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let movedValue;
  let lastValue;

  document.querySelectorAll('[data-block]').forEach ((div) => {
    div.addEventListener('click', (e) => {
      movedValue = { size: e.target.attributes[0].value};
      e.stopPropagation;
      moved = { target: e.target};
      //movedValue = e.target.parentNode.lastChild;
      //console.log(moved);
      e.target.parentNode.removeChild(e.target);
    //  console.log(moved.size);
    });
  });

  document.querySelectorAll('[data-stack]').forEach ((div) => {
      div.addEventListener ('click' ,(e) => {

        if (!e.target.children.length){
          e.target.appendChild(moved.target);

        } else {
          lastValue = { size: e.target.attributes[e.target.legnth -1].value};
          console.log(lastValue);
        }
        // lastValue = { size: e.target.attributes[0].value};
        // console.log(lastValue);
      });


      //console.log('moved.target');

  });
});
