import './style.css';
import AddItem from './task';
import {printChores, resetAll, completeTrue} from './task';

// delete all
const deleteAll = document.getElementById('remove-all');
deleteAll.addEventListener('click', resetAll());

// ADD NEW ITEM
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr === null) {
    choresArr = [];
  }
  const checkbox = complete(false);
  const ID = choresArr.length+1;
  const chore = document.getElementById('todoInput').value;
  const newItem = new AddItem(ID, chore, checkbox);
  console.log(newItem);

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
