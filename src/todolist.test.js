const AddItem = require('./index.js')
const addItem = require('./index.js')
// const { printChores } = require('./task.js');


describe("AddItem", () => {
  test('adding a chore return chore', () => {
    const chore = AddItem('string')
    expect(chore).toMatch('/abc/');
  });
  })
