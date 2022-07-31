function resetAll() {
  let choresArr = JSON.parse(localStorage.getItem('choresArr'));
  if (choresArr !== null) {
    for (let i = 0; i < choresArr.length; i++) {
      choresArr = [];
    }
    localStorage.setItem('choresArr', JSON.stringify(choresArr));
  }
}
/*  const deleteAll = document.getElementById('remove-all');
  deleteAll.addEventListener('click', resetAll()); */

module.exports = resetAll;
