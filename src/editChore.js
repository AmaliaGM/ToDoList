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

module.exports = updateDescription;

