/* import _ from 'lodash'; */
/* import printMe from './print.js';
 */
function todoList() {
  let item = document.getElementById('todoInput.value')
  let text = document.createTextNode(item);
  let newItem = document.createElement('li');
  newItem.appendChild(text);
  document.getElementById('todoList').appendChild(newItem);
}
/* let container = document.querySelector('#chores')
let bigContainer = document.querySelector('#itemForm')
let chores = {
  selectElements: function() {
    this.choreInput = document.getElementById('itemInput');
    this.choresList = document.getElementById('choresList');
    this.choresListChildren = this.choresList.children;
    this.addButton = document.getElementById('add');
    this.errorMessage = document.getElementById('error');
   
  },
  buildChore: function() {
    let choresListItem; let choresCheckbox; let choresValue; let choresButton; let choresTrash;
    choresListItem = document.createElement('li');
    choresListItem.setAtribute('class', 'chore');

    choresCheckbox = document.createElement('input');
    choresCheckbox.classList = 'checkbox';
    choresCheckbox.setAttribute('type', 'checkbox');
    choresValue = document.createTextNode(this.choreInput.value);
    choresButton = document.createElement('button');
    choresTrash = document.createElement('i');
    choresTrash.setAttribute('class', 'fa fa-trash');
    trashButton.appendChild(choresTrash);
    choresListItem.appendChild(choresCheckbox);
    choresListItem.appendChild(choresValue);
    choresListItem.appendChild(choresButton);

    this.choresList.appendChild(choresListItem);
  },


};
chores[this.choresList] = container.children;
chores[this.choreInput] = container.children;
chores[this.addButton] = container.children;
bigContainer.appendChild(container);
for (var i = 0; i < localStorage.length; i++) {
         apendItem (localStorage.key(i), localStorage.getItem(localStorage.key(i)));
} */
 /* function itemID() {
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
  constructor(ID, chore) {
    this.ID = ID;
    this.chore = chore;
  }
}
const add = document.querySelector('#add');
add.addEventListener('click', () => {
  const ID = itemID();
  const chore = document.querySelector('#itemInput').value;
  const newItem = new AddItem(ID, chore);

  if (chore!== '') {
    let choresArr = JSON.parse(localStorage.getItem('choresArr'));
    if (choresArr === null) {
      choresArr = [];
    }

    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
    window.print(choresArr);
});
  */