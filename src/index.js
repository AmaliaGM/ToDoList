import './style.css';
import AddItem from './task';
import {printChores, resetAll} from './task';

// delete all 
let deleteAll = document.getElementById('remove-all');
deleteAll.addEventListener('click', resetAll());

// ADD NEW ITEM

const add = document.querySelector('#add');
add.addEventListener('click', () => {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr === null) {
    choresArr = [];
  }
  const ID = choresArr.length+1;
  const chore = document.getElementById('todoInput').value;
  let complete = false;
  const newItem = new AddItem(ID, chore, complete);
  console.log(newItem);

  if (chore!== '') {
    choresArr.push(newItem);
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
   console.log('default value', complete);
   function toggle () {
    complete = !complete;
    console.log('I ve done it!')
   }
   
  }
  printChores();
  // document.location.reload();
});

document.querySelectorAll(".todoCheckbox").forEach (element => {
   element.addEventListener('click', toggle())
  });

export function toggle() {
  const choresArr = JSON.parse(localStorage.getItem('choresArr'));
  for(let i = 0; i<choresArr.length;i += 1) {
  let complete = choresArr[i].complete
  complete = !complete;
 }
}

let check = document.querySelectorAll('.todoCheckbox')
if (check.checked == true) {
  document.querySelectorAll('.todoCheckbox').forEach(check => {
    check.addEventListener('click', toggle())
})
}