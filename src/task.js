export default class AddItem {
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
    choreList.innerHTML = '';
    for (let i = 0; i < choresArr.length; i += 1) {
      const chores = `<li id='chore${i}'class='chore'>
    <div class='chore-info'>            
    <input type="checkbox" class="todoCheckbox">
        <p class='ID'>${choresArr[i].ID}</p>
        <input type='text' data-index='${choresArr[i].ID}' 
              class='chore' value='${choresArr[i].chore}'/>
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
    updateDescription();
  }
}
// printChores();

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
    clearChores();
    printChores();
   // document.location.reload();
  }
});


const choresArr = JSON.parse(localStorage.getItem('choresArr'));

const clrBtn = document.getElementById('remove-all');
clrBtn.addEventListener('click', () => {
  for (let i = 0; i < choresArr.length; i += 1) {
    if (choresArr[i].completed) {
      choresArr.splice(i, 1);
      choresArr.forEach((chores) => {
        if (chores.index > i) {
          chores.index -= 1;
        }
      });
      i -= 1;
    }
  }
  localStorage.setItem('todoList', JSON.stringify(choresArr));
});

function check() {
  document.getElementById(".todoCheckbox").checked = choresArr.complete(true);
}

function uncheck() {
  document.getElementById(".todoChckbox").checked = choresArr.complete(false);
}