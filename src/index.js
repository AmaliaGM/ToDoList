// import { convertToObject } from 'typescript';
import './style.css';
import {printChores, resetAll, completeTrue} from './task';

// delete all
const deleteAll = document.getElementById('remove-all');
deleteAll.addEventListener('click', resetAll());

// ADD NEW ITEM
class AddItem {
  constructor(ID, chore, complete = false) {
    
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
  const newItem = new AddItem(ID, chore, complete);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  printChores();
});

document.querySelectorAll('.todoCheckbox').forEach((element) => {
  element.addEventListener('click', completeTrue());
});

const check = document.querySelectorAll('.todoCheckbox');
if (check.checked == true) {
  document.querySelectorAll('.todoCheckbox').forEach((check) => {
    check.addEventListener('click', completeTrue());
  });
}
