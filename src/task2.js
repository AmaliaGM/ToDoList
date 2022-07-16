export default class AddItem {
    constructor(ID, chore, complete) {
      this.ID = ID;
      this.chore = chore;
      this.complete = complete === false;
    }
  }

  export function printChores() {
    const choreList = document.getElementById('todoList');
    const choresArr = JSON.parse(localStorage.getItem('choresArr'));
  
    if (choresArr !== null) {
      for (let i = 0; i < choresArr.length; i += 1) {
        const chores = `<li id='chore${i}' class='chore'>
        <div class='chore-info'>            
        <input type="checkbox" id="todoCheckbox" name="checkbox">
          <p class='ID'>${choresArr[i].ID}</p>
          <input class='chore' value=${choresArr[i].chore}>       
          <p class='complete' value=false>${choresArr[i].complete}</p>
        </div>
        <div class='buttonCont'> 
        <button id="${choresArr[i].ID}" class='remove-btn'>
            <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
        </li>`;
        choreList.innerHTML += chores;
      }
      const checkbox = document.getElementById('todoCheckbox');
      if (checkbox.checked) {
       complete === true;
   }
    }
  }
  printChores();
