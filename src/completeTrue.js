function completeTrue() {
  choresArr.forEach((chore) => {
    if (chore.title === title) {
      chore.completed = true;
      return;
    }
  });
}

module.exports = completeTrue;
