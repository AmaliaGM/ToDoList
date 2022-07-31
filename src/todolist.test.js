const addNewItem = require('./add.js');

const updateDescription = require('./editChore.js');
const deleteItem = require('./remove.js');
const resetAll = require('./removeAll.js');
const completeTrue = require('./completeTrue.js');


// add testing
describe('add a chore', () => {
  test('contains at least one item on the ordered list', () => {
    if (typeof window !== 'undefined') {
      const list = document.querySelector('.chore');
      list.push({
        ID: 1,
        chore: 'run code',
        complete: false,
      });

      expect(addNewItem('run code')).toEqual(...list);
      expect(list.length).toEqual(1);
    }
  });
  test('deletes at least one item on the ordered list', () => {
    if (typeof window !== 'undefined') {
      const list = document.querySelector('.chore');
      list.push({
        ID: 1,
        chore: 'run code',
        complete: false,
      });

      expect(deleteItem('run code')).toEqual(...list);
      expect(list.length).toEqual(0);
    }
  });
});

describe('edit a chore, edit complete and clear all', () => {
  test('changes name of the task in local storage', () => {
    if (typeof window !== 'undefined') {
      const list = document.querySelector('.chore');
      list.push({
        ID: 1,
        chore: 'run code',
        complete: false,
      });

      expect(updateDescription('run code')).toEqual(input);
      expect(list.length).toEqual(1);
    }
  });
  test('deletes all the items on the ordered list', () => {
    if (typeof window !== 'undefined') {
      const list = document.querySelector('.chore');

      expect(resetAll('run code')).toEqual(...list);
      expect(list.length).toEqual(0);
    }
  });
  test('deletes all the items on the ordered list', () => {
    if (typeof window !== 'undefined') {
      const list = document.querySelector('.chore');

      expect(completeTrue('run code')).toEqual(complete);
      expect(list.length).toEqual(1);
    }
  });
});
