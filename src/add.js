function addItem() {
    const add = document.querySelector('#add');
    add.addEventListener('click', () => {
      let choresArr = JSON.parse(localStorage.getItem('choresArr'));
      if (choresArr === null) {
        choresArr = [];
      }
      
      const ID = choresArr.length+1;
      const chore = document.getElementById('todoInput').value;
      const complete = document.querySelectorAll('.complete');
      const newItem = new AddItem(ID, chore, complete.value == false);
    
      document.querySelectorAll('.todoCheckbox').forEach((element) => {
        element.addEventListener('click', () => {
          for(let i=0; i < choresArr.length; i++) {
            choresArr[i].complete == true;
          }
        });
      });
    
      if (chore!== '') {
        choresArr.push(newItem);
        localStorage.setItem('choresArr', JSON.stringify(choresArr));
      }
      printChores();
    });
     }

     module.exports = addItem;
