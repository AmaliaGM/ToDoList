function completeTrue() {
    let completeFound = false;
    this.choresArr.forEach((chore) => {
        if (chore.title === title) {
            chore.completed = true;
            completeFound = true;
            return;
        }
    });
}

module.exports = completeTrue;