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
  const complete = document.querySelector('.completed'); // se usa despues
  const newItem = new AddItem(ID, chore);
  console.log(newItem);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  printChores();
  //document.location.reload();
});

function myFunction() {
  const input = document.querySelector('.chore');
  let chore = document.querySelector('.chore').value;

  input.addEventListener('change', () => {
    p0
  });

  document.addEventListener('change', (e) => {
    input.value = e.target.value;
  });
  function saveToLocal() {
    localStorage.setItem('chore', chore.value);
  }
  document.addEventListener('click', saveToLocal);
}
myFunction();
