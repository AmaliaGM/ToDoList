import { printChores } from "./task2";

function deleteItem() {
  const element = document.querySelector('#todoList');
  element.addEventListener('click', (e) => {
    if (e.target.className === 'fa-solid fa-trash-can') {
      const index = parseInt(e.target.parentElement.id, 10);
      console.log(index);
      let choresArr = JSON.parse(localStorage.getItem('choresArr'));
      /* console.log(choresArr); */
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
}
deleteItem();
// CLEAR ALL BOOKS ON HTML TO PRINT AGAIN
  export function clearChores() {
  const choresList = document.getElementById('chores');
  while (choresList.firstChild) {
    choresList.removeChild(choresList.firstChild);
  }
}
let clear = document.querySelector('#clear');
let ul = document.querySelector('#todoList');
ul.appendChild(clear);
clear.addEventListener('click', () => {
  choresList.clearChores();
}) 
