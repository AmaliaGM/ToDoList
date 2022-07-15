import './style.css';

// ADD NEW ITEM
class AddItem {
  constructor(ID, chore, complete = false) {
    this.ID = ID;
    this.chore = chore;
    this.complete = complete;
  }
}
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
      <button id="${choresArr[i].ID}" class='remove-btn'>
          <i class="fa-solid fa-trash-can"></i>
          </button>
      </div>
      </li>`;
      choreList.innerHTML += chores;
    }
  }
}
printChores();

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
    // clearChores();
    printChores();
    document.location.reload();
  }
});
