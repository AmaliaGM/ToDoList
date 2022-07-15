import './style.css';

function itemID() {
  let previousID = JSON.parse(localStorage.getItem('itemID'));
  const newID = previousID + 1;
  if (previousID == null) {
    previousID = 1;
    localStorage.setItem('itemID', JSON.stringify(previousID));
    return previousID;
  }
  localStorage.setItem('itemID', JSON.stringify(newID));
  return newID;
}

// ADD NEW ITEM
class AddItem {
  constructor(ID, chore, complete) {
    this.ID = ID;
    this.chore = chore;
    this.complete = complete;
  }
}
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  const ID = itemID();
  const chore = document.querySelector('#todoInput').value;
  const complete = document.querySelector('.completed');
  const newItem = new AddItem(ID, chore, complete);

  if (chore!== '') {
    let choresArr = JSON.parse(localStorage.getItem('choresArr'));
    if (choresArr === null) {
      choresArr = [];
    }

    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
});
function printChores() {
  const choreList = document.getElementById('todoList');
  const choresArr = JSON.parse(localStorage.getItem('choresArr'));

  if (choresArr !== null) {
    for (let i = 0; i < choresArr.length; i += 1) {
      const chores = `<li id='chore${i}'class='chore'>
      <div class='chore-info'>            
      <input type="checkbox" class="todoCheckbox">
        <p class='ID'>${choresArr[i].ID}</p>
        
        <p class='chore'>${choresArr[i].chore}</p>
       
        <p class='complete'>complete</p>
      </div>
      <div class='buttonCont'>
      <button id="${choresArr[i].class}" class='checked'></button>
      <i class="fa-solid fa-ellipsis-vertical icon-dots"></i>
      </div>
      </li>`;
      choreList.innerHTML += chores;
    }
  }
}
printChores();
