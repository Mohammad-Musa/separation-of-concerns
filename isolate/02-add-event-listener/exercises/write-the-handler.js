'use strict';

// fill in the _s

const buttonEl = document.createElement('button');
buttonEl.innerHTML = 'are you honest?';
console.log(buttonEl.nodeName, buttonEl.cloneNode(true));


const truthTestHandler = () => {
 // ask a user to confirm if they are honest
 const clarify = confirm('Are you a honest person?');
 // let them know what you think of their answer
     if (clarify){
     alert('Hello, you are honest :)')
   } else {
     alert('Sorry, unknown user!')
   }


buttonEl.addEventListener('click', truthTestHandler);


// "click" the button once
const clickEvent1 = new Event('click');
buttonEl.dispatchEvent(clickEvent1);

// "click" the button again
const clickEvent2 = new Event('click');
buttonEl.dispatchEvent(clickEvent2);
