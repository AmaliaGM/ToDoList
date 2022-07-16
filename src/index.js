import './style.css';
import AddItem from './task';
import {printChores} from './task';

// ADD NEW ITEM

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr === null) {
    choresArr = [];
  }
  const ID = choresArr.length+1;
  const chore = document.getElementById('todoInput').value;

  const newItem = new AddItem(ID, chore);
  console.log(newItem);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  printChores();
  // document.location.reload();
});
export function clearChores() {
  const listPlaceholder = document.getElementById('.chores');
  while (listPlaceholder.firstChild) {
    listPlaceholder.removeChild(listPlaceholder.firstChild);
  }
}

