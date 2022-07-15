import './style.css';
import AddItem from './task';
import {printChores} from './task';
import {deleteItem} from './task';

// ADD NEW ITEM
addItem();
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr === null) {
    choresArr = [];
  }
  const ID = choresArr.length+1;
  const chore = document.querySelector('#todoInput').value;
  const complete = document.querySelector('.completed');
  const newItem = new AddItem(ID, chore, complete);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  document.location.reload();
});

printChores();
deleteItem();
