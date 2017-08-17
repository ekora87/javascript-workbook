'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Your code here
  let moved = {};
  let movedValue;
  let lastValue;

  document.querySelectorAll('[data-block]').forEach ((div) => {
    div.addEventListener('click', (e) => {

      movedValue = e.target.attributes[0].value;
      // console.log(movedValue);
      // debugger;
      moved = { target: e.target, parent: e.target.parentNode};
      //e.stopPropagation;
      //movedValue = e.target.parentNode.lastChild;
      // console.log(moved);
      // console.log(e.target.parentNode.children[e.target.parentNode.children.length - 1]);
      // debugger;
      if (e.target === e.target.parentNode.children[e.target.parentNode.children.length - 1]) {
        e.target.parentNode.removeChild(e.target);
      }
      //console.log(movedValue);

    });
  });

  document.querySelectorAll('[data-stack]').forEach ((stack) => {
      stack.addEventListener ('click' ,(e) => {
        //lastValue = 0;
        //console.log();
        let num = e.target.children.length;

        //e.target.removeChild(e.target.lastChild);
        //debugger;
        if (!e.target.children.length) {
        //  debugger;
        // console.log("Move: " + movedValue);
        // console.log("last: " + lastValue);
          e.target.appendChild(moved.target);
        } else {
          lastValue = e.target.children[num-1].attributes[0].value;
          if (movedValue <= lastValue) {
              e.target.appendChild(moved.target);
          }
        }
        console.log("Move: " + movedValue);
        console.log("last: " + lastValue);

        // if (!e.target.children.length){
        //   e.target.appendChild(moved.target);
        //
        // } else {
        //
        //
        // }
        // lastValue = { size: e.target.attributes[0].value};
        // console.log(lastValue);
      });


 });

 document.querySelector('[data-stack]').addEventListener('click', (e) => {
   e.target.appendChild(moved.target);
 });
});
