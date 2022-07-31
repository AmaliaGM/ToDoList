class addNewItem {
  constructor(ID, chore, complete) {
    this.ID = ID;
    this.chore = chore;
    this.complete = complete;
  }
}
/* function addItem(ID, chore, complete) {
  const addBt = document.querySelector('#add');
  addBt.addEventListener('click', () => {
    let choresArr = JSON.parse(localStorage.getItem('choresArr'));
    if (choresArr === null) {
      choresArr = [];
    }

    const ID = choresArr.length+1;
    const chore = document.getElementById('todoInput').value;
    const complete = document.querySelectorAll('.complete');
    const newItem = new addItem(ID, chore, complete.value == false);
 */ /*
      document.querySelectorAll('.todoCheckbox').forEach((element) => {
        element.addEventListener('click', () => {
          for(let i=0; i < choresArr.length; i++) {
            choresArr[i].complete == true;
          }
        }); */

/*   addItem(newItem);
  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
  printChores(); */

module.exports = addNewItem;
