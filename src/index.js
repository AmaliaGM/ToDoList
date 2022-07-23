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
  const ID = choresArr.length+1;
  const chore = document.getElementById('todoInput').value;
  const complete = false;
  const newItem = new AddItem(ID, chore, complete);
  console.log(newItem);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
    console.log('default value', complete);
  }
  printChores();
  // document.location.reload();
});

document.querySelectorAll('.todoCheckbox').forEach((element) => {
  element.addEventListener('click', completeTrue());
});

/* export function toggle() {
  const choresArr = JSON.parse(localStorage.getItem('choresArr'));
  for (let i = 0; i<choresArr.length; i += 1) {
    let complete = choresArr[i].complete;
    complete = !complete;
  }
}
 */
const check = document.querySelectorAll('.todoCheckbox');
if (check.checked == true) {
  document.querySelectorAll('.todoCheckbox').forEach((check) => {
    check.addEventListener('click', toggle());
  });
}
