export default class addItem {
  constructor(ID, chore, complete = false) {
    this.ID = ID;
    this.chore = chore;
    this.complete = complete;
  }
}

export function printChores() {
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

export function deleteItem() {
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
}
deleteItem();
