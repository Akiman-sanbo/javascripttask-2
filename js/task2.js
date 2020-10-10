'use strict';

document.getElementById('Run').addEventListener('click',() => {
  const FizzText = document.getElementById('Fizz').value;
  const BuzzText = document.getElementById('Buzz').value;
  const parent = document.getElementById('OutputParent');
  while(parent.lastChild){
    parent.removeChild(parent.lastChild);
  }

  const isFizzInteger = Number.isInteger(FizzText);
  console.log(isFizzInteger);
});
//   if(isFizzInteger && isBuzzInteger){  
//      for(let i = 1 ; i <100 ; i++){
//         if( i % FizzText === 0 && i% BuzzText === 0){
//            let New = document.createElement('p');
//            New.textContent = `FizzBuzz${i}`;
//            let div  = document.getElementById('OutputParent');
//            div.appendChild(New);
//          } else if(i % FizzText === 0){
//             let New = document.createElement('p');
//             New.textContent = `Fizz${i}`; 
//             let div  = document.getElementById('OutputParent');
//             div.appendChild(New);
//          } else if(i % BuzzText === 0){
//             let New = document.createElement('p');
//             New.textContent = `Buzz${i}`; 
//             let div  = document.getElementById('OutputParent');
//             div.appendChild(New);
//          }
//       }
//     } else { 
//    let New = document.createElement('p');
//    New.textContent = '整数値を入力してください';
//    let div  = document.getElementById('OutputParent');
//    div.appendChild(New);
//    return false;
//    }
// });