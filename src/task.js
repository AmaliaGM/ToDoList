export function printChores() {
  const choreList = document.getElementById('todoList');
  const choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr !== null) {
    choreList.innerHTML = '';
    for (let i = 0; i < choresArr.length; i += 1) {
      const chores = `<li id='chore${i}'class='chore'>
    <div class='chore-info'>            
    <input type="checkbox" class="todoCheckbox" value="false">
        <p class='ID'>${choresArr[i].ID}</p>
        <input type='text' data-index='${choresArr[i].ID}' 
          class='chore' value='${choresArr[i].chore}'/>
          <p class='complete'>${choresArr[i].complete}</p>
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
printChores();

export function completeTrue() {
  const choresArr = JSON.parse(localStorage.getItem('choresArr'));
  const complete = document.getElementsByTagName('input.complete');
  for (let i = 0; i < choresArr.length; i++) {
    // Check if the element is a checkbox.
    if (choresArr[i].className == 'todoCheckbox' &&
    choresArr[i].type == 'checkbox') {
      // Finally, check if the checkbox is checked.
      if (chore[i].checked) {
        complete.value == true;
      }
    }
  }
}

export function resetAll() {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr !== null) {
    for (let i = 0; i < choresArr.length; i++) {
      choresArr = [];
    }
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
}

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

function deleteItem() {
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
    printChores();
  }
});
}
 