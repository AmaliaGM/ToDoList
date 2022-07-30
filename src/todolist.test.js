const AddItem = require('./add.js');
const add = require('./add.js');
const deleteItem = require('./remove.js');

 describe('initial', () => {
  test('first tests', () => {
    expect(true).toBe(true)
  })
}) 
// add testing
describe('add a chore', () => {
  test("contains at least one item on the ordered list", () => {
    if (typeof window !== 'undefined') {
    const list = document.querySelector('.chore')
    list.push({
      ID: 1,
      chore: 'run code',
      complete: false,
    })
  
  expect(AddItem('run code')).toEqual(...list);
    expect(list.length).toEqual(1); 
  }
  });
  test("deletes at least one item on the ordered list", () => {
    if (typeof window !== 'undefined') {
    const list = document.querySelector('.chore')
    list.push({
      ID: 1,
      chore: 'run code',
      complete: false,
    })
  
  expect(deleteItem('run code')).toEqual(...list);
    expect(list.length).toEqual(0); 
  }
  });
})
