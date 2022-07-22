import './style.css';
import AddItem from './task2';

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

const element = document.querySelector('#todoList');
element.addEventListener('click', (e) => {
  if (e.target.className === 'fa-solid fa-trash-can') {
    const index = parseInt(e.target.parentElement.id, 10);
    console.log(index);
    let choresArr = JSON.parse(localStorage.getItem('choresArr'));
    choresArr = choresArr.filter((chores) => chores.ID !== index);
    for (let i = 0; i < choresArr.length; i+=1) {
      choresArr[i].ID = i + 1;
    }
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
    clearChores();
    printChores();
    document.location.reload();
  }
});
