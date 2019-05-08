// 32: array - `Array.prototype.find` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.find` makes finding items in arrays easier', () => {
  it('takes a compare function', function() {
    
    // const found = [true].find(true);
    const found = [true].find(x => x === true)
    // needed to write a function for true
    
    assert.equal(found, true);
  });
  it('returns the first value found', function() {
    
    // const found = [0, 1].find(item => item > 1);
    const found = [0, 1, 2].find(x => x > 1);
    // added 2 to the array so the find function could find something greater than 0
    
    assert.equal(found, 2);
  });
  it('returns `undefined` when nothing was found', function() {
    
    // const found = [1, 2, 3].find(item => item === 2);
    const found = [1, 2, 3].find(x => x === 4);
    // changed x === 4 since 4 isnt in the array
    
    assert.equal(found, void 0);
  });
  it('combined with destructuring complex compares become short', function() {
    
    // const bob = {name: 'Bob'};
    // const alice = {name: 'Alice'};
    // const found = [bob, alice].find(({name}) => name);
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    const found = [bob, alice].find(({name}) => name === 'Alice');
    // name needed to stricly equal 'Alice'
    
    assert.equal(found, alice);
  });
});