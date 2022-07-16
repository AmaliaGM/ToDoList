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
/*let chore = document.querySelector(".chore");
let holder = document.setAttribute("placeholder")
chore.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT' && e.target.classList.contains('chore')) {
    const chore = e.target;
    let index = [...chore.classList];
    index = index[index.length - 1];
    chore.addEventListener('keydown', (e) => {
      if (e.keyCode === 13 && chore.value !== '') {
        editTask(chore.value, index);
      }
    });
  }
});*/
