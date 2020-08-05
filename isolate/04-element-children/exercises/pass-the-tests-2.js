'use strict';

const divEl = document.createElement('div');
divEl.innerHTML = `
  <a href='#toop'>
    <button>back to the top</button>
  </a>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
let a = divEl.children[0];
a.href = '#top'; 
let button = a.children[0];
button.innerHTML = "to the top";
// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.children[0].getAttribute('href') === '#top',
  'Test: href');

console.assert(divEl.children[0].children[0].innerHTML === 'to the top',
  'Test: button innerHTML');

