export default function addElement() {  
let listElement = document.getElementsByTagName('li');
for(let i = 0; i < listElement.length; i++) {
   const itemCont = document.createElement('span');
   const text = document.createTextNode('\u00D7');
   itemCont.className = 'close';
   itemCont.appendChild(text);
   listElement[i].appendChild(itemCont);
}
}
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
 close[i].onclick = function() {
   let div = this.parentElement;
   div.style.display = 'none';
 }
}
/* 
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

document.body.appendChild(component()); */
