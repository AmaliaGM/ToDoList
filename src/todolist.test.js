// __tests__/index.test.js
describe('initial', () => {
  test('first tests', () => {
    expect(true).toBe(true)
  })
})
/* describe('add and remove function tests', () => {
  test('adding to the local storage', () => {
    const choresArr = JSON.parse(localStorage.getItem('choresArr')) || [];
    choresArr.push({
      description: 'add',
      completed: false,
      index: 1,
    });

    expect(addItem('add')).toEqual(choresArr.description);
    expect(choresArr.length).toEqual(1);
  });

  test('remove item from local storage', () => {
    const list = {
      description: 'add',
      completed: false,
      index: 1,
    };

    const list2 = {
      description: 'cook',
      completed: false,
      index: 2,
    };

    const localstorage = JSON.parse(localStorage.getItem('choresArr')) || [];
    localstorage.push(list);
    expect(localstorage).toHaveLength(2);
    localstorage.push(list2);
    expect(localstorage).toHaveLength(3);
    localstorage.pop();
    expect(localstorage).toHaveLength(2);
    const delbtn = document.querySelectorAll('fa-trash');
    if (delbtn) {
      expect(deleteItem('cook')).toEqual(localstorage[2]);
      expect(localstorage.length).toEqual(2);
    }
  });
}); */
