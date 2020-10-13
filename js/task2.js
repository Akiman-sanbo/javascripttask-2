'use strict';

document.getElementById('Run').addEventListener('click',() => {
  const FizzText = document.getElementById('Fizz').value;
  const BuzzText = document.getElementById('Buzz').value;
  const parent = document.getElementById('outputParent');
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }

  const isFizzInteger = Number.isInteger(Number(FizzText));
  const isBuzzInteger = Number.isInteger(Number(BuzzText));

  if (FizzText === "" || BuzzText === ""|| !isFizzInteger || !isBuzzInteger) { 
    const addition = document.createElement('p');
    addition.textContent = '整数値を入力してください';
    const div  = document.getElementById('outputParent');
    div.appendChild(addition);
    return false;
  } else if (isFizzInteger && isBuzzInteger){  
     for (let i = 1 ; i <100 ; i++) {
        if ( i % FizzText === 0 && i% BuzzText === 0) {
           const addition = document.createElement('p');
           addition.textContent = `FizzBuzz${i}`;
           const div  = document.getElementById('outputParent');
           div.appendChild(addition);
         } else if (i % FizzText === 0) {
            const addition = document.createElement('p');
            addition.textContent = `Fizz${i}`; 
            const div  = document.getElementById('outputParent');
            div.appendChild(addition);
         } else if (i % BuzzText === 0) {
            const addition = document.createElement('p');
            addition.textContent = `Buzz${i}`; 
            const div  = document.getElementById('outputParent');
            div.appendChild(addition);
         }
      }
   } 
});