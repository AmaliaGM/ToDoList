const localStorageMock = (() => {
  let store = {};
  return {
    getItem(chores) {
      return store[choresArr];
    },
    setItem( choresArr, chores) {
      store[choresArr] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(chores) {
      delete store[choresArr[i]];
    }
  };
})();
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});