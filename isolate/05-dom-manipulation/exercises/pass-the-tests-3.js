'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
const trEl0 = divEl.children[0].children[0].children[0];
const trEl1 = divEl.children[0].children[0].children[1];

const tdEl0 = document.createElement('TD');
tdEl0.innerHTML = 'a';
trEl0.appendChild(tdEl0);
const tdEl1 = document.createElement('TD');
tdEl1.innerHTML = 'b';
trEl0.appendChild(tdEl1);

const tdEl2 = document.createElement('TD');
tdEl2.innerHTML = 'c';
trEl1.appendChild(tdEl2);
const tdEl3 = document.createElement('TD');
tdEl3.innerHTML = 'd';
trEl1.appendChild(tdEl3);

console.log(trEl0.children);
console.log(tdEl0.innerHTML);
console.log(tdEl1.innerHTML);

console.log(trEl1.children);
console.log(tdEl2.innerHTML);
console.log(tdEl3.innerHTML);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
