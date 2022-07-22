// import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

export default class AddItem {
  constructor(ID, chore, complete, check) {
    this.ID = ID;
    this.chore = chore;
    this.complete = complete;
    this.check = check;
  }
}

export function printChores() {
  const choreList = document.getElementById('todoList');
  const choresArr = JSON.parse(localStorage.getItem('choresArr'));

  if (choresArr !== null) {
    choreList.innerHTML = '';
    for (let i = 0; i < choresArr.length; i += 1) {
      const chores = `<li id='chore${i}'class='chore'>
    <div class='chore-info'>            
    <input type="checkbox" class="todoCheckbox">
        <p class='ID'>${choresArr[i].ID}</p>
        <input type='text' data-index='${choresArr[i].ID}' 
              class='chore' value='${choresArr[i].chore}'/>
        <p class='complete' value=false>complete</p>
    </div>
    <div class='buttonCont'>
    <button id="${choresArr[i].ID}" class='remove-btn'>
        <i class="fa-solid fa-trash-can"></i>
        </button>
    </div>
    </li>`;
      choreList.innerHTML += chores;
    }
    updateDescription();
  }
}
// printChores();

/* let chores = document.querySelector('todoList')
let li = document.createElement('li')
li.classList = 'chore'
let check = document.createElement('input')
check.setAttribute('type', 'checkbox')
check.classList = 'check'
li.appendChild(check)
let id = document.createElement('p')
id.classList = 'ID'
li.appendChild(id)
let chore = document.createElement('input')
chore.classList = 'chore'
li.appendChild(chore)
let complete = document.createElement('input')
complete.classList = 'complete'
li.appendChild(complete)
chores.appendChild(li) */

const choresArr = JSON.parse(localStorage.getItem('choresArr'));
const checkbox = document.querySelector('.todoCheckbox');

for (var i = 0; i < choresArr.length; i++) {
  // Check if the element is a checkbox.
  if (choresArr[i].className == 'todoCheckbox' && choresArr[i].type == 'checkbox') {
      // Finally, check if the checkbox is checked.
      if (chore[i].checked) {
          alert(choresArr[i].value + ' is checked!');
      }
  }
}

 /*  if (checkbox = true) {
    */
  //document.querySelector('.complete').value = true;

function resetAll() {
  if(choresArr !== null) {
  for (let i = 0; i < choresArr.length; i++){
      choresArr.splice(0, choresArr.length);
   /*  localStorage.clear(); */
  }
  localStorage.setItem('choresArr', JSON.stringify(choresArr));
}
}
let deleteAll = document.getElementById('remove-all');
deleteAll.addEventListener('click', resetAll());

function updateDescription() {
  const input = document.querySelectorAll('input.chore');
  console.log(input);
  input.forEach( (element) => {
    element.addEventListener('change', (e) => {
      const currentChore = e.target.value;
      const choresArr = JSON.parse(localStorage.getItem('choresArr'));
      const index = parseInt(e.target.dataset.index, 10);
      for ( let i = 0; i < choresArr.length; i += 1) {
        if (choresArr[i].ID === index) {
          choresArr[i].chore = currentChore;
        }
      }
      console.log(choresArr);
      localStorage.setItem('choresArr',
          JSON.stringify(choresArr));
    });
  },
  );
}

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
    // document.location.reload();
  }
});
