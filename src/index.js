import './style.css';
import addItem from './task';
import {printChores} from './task';
import {deleteItem} from './task';

// ADD NEW ITEM

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr === null) {
    choresArr = [];
  }
  const ID = choresArr.length+1;
  const chore = document.querySelector('#todoInput').value;
  const complete = document.querySelector('.completed');
  const newItem = new addItem(ID, chore, complete);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  document.location.reload();
});

 function myFunction() {
  
  let input = document.querySelector(".chore");
  let chore = document.querySelector(".chore").value;
  
  input.addEventListener('click', () => {
    chore = input.value
  });

 document.addEventListener('change', (e) => {
  input.value = e.target.value
})
function saveToLocal() {
  localStorage.setItem('chore', chore.value);
}
document.addEventListener('click', saveToLocal) 
 }

