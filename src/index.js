import _ from 'lodash';
import 'style.css';
import printMe from './print.js';

 
let list = document.querySelector('myList');
list.addEventListener('click', (e) => {
 if(e.target.tagName === 'li') {
   e.target.classList.toogle('checked');
 }
}, false);

function newItem() {
 let li = document.createElement('li');
 let input = document.getElementById('myInput').value;
 let letter = document.createTextNode(input);
 li.appendChild(letter);
 if (input === '') {
   alert('Please type some text');
 } else {
   document.getElementById('myList').appendChild(li);
 }
 document.getElementById('chore').value = '';

 let itemCont = document.createElement('span');
 let text = document.createTextNode('u0007');
 itemCont.className = 'close';
 itemCont.appendChild(text);
 li.appendChild(span);

 for (let i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       let div = this.parentElement;
       div.style.display = 'none';
     }
 }
}

document.body.appendChild(component());