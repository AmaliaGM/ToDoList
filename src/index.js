// import { convertToObject } from 'typescript';
 import './style.css';
import {printChores, resetAll, completeTrue} from './task.js';

console.log("hola")
// delete all
const deleteAll = document.getElementById('remove-all');
deleteAll.addEventListener('click', resetAll());

// ADD NEW ITEM
export class AddItem {
  constructor(ID, chore, complete) {
    
    this.ID = ID;
    this.chore = chore;
    this.complete = complete;
  }
}
 
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr === null) {
    choresArr = [];
  }
  
  const ID = choresArr.length+1;
  const chore = document.getElementById('todoInput').value;
  const complete = document.querySelectorAll('.complete');
  const newItem = new AddItem(ID, chore, complete.value == false);

  document.querySelectorAll('.todoCheckbox').forEach((element) => {
    element.addEventListener('click', () => {
      for(let i=0; i < choresArr.length; i++) {
        choresArr[i].complete == true;
      }
    });
  });
  
  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  printChores();
});
 

const check = document.querySelectorAll('.todoCheckbox');
if (check.checked == true) {
  document.querySelectorAll('.todoCheckbox').forEach((check) => {
    check.addEventListener('click', completeTrue());
  });
}
