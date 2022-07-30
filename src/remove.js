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
 
  module.exports = deleteItem;