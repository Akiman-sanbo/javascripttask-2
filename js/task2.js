'use strict';

document.querySelector('button').addEventListener('click',() => {
  const textf = document.getElementById('Fizz').value;
  const textb = document.getElementById('Buzz').value;
  let parent = document.querySelector('div');
  while(parent.lastChild){
    parent.removeChild(parent.lastChild);
  }
  if(isNaN(textf)){  
   let New = document.createElement('p');
   New.textContent = '整数値を入力してください';
   let div  = document.querySelector('div');
   div.appendChild(New);
   return false;
  } else if (isNaN(textb)){ 
     let New = document.createElement('p');
     New.textContent = '整数値を入力してください';
     let div  = document.querySelector('div');
     div.appendChild(New);
     return false;
  } else if ((textf == "" )||textb == ""){
     let New = document.createElement('p');
     New.textContent = '整数値を入力してください';
     let div  = document.querySelector('div');
     div.appendChild(New);
    return false;
  }
  for(let i = 1 ; i <100 ; i++){
   if( i % textf === 0 && i% textb === 0){
    let New = document.createElement('p');
    New.textContent = `FizzBuzz${i}`;
    let div  = document.querySelector('div');
    div.appendChild(New);
 } else if(i % textf === 0){
    let New = document.createElement('p');
    New.textContent = `Fizz${i}`; 
    let div  = document.querySelector('div');
    div.appendChild(New);
 } else if(i % textb === 0){
    let New = document.createElement('p');
    New.textContent = `Buzz${i}`; 
    let div  = document.querySelector('div');
    div.appendChild(New);
 }
 }
});