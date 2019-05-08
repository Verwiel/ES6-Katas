// 33: array - `Array.prototype.findIndex` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.findIndex` makes finding items in arrays easier', () => {
  it('takes a compare function, returns the index where it returned true', function() {
    
    // const foundAt = [false, true].findIndex(item);
    const foundAt = [false, true].findIndex(x => x === true);
    // wrote a compare function for x to === true
    
    assert.equal(foundAt, 1);
  });
  it('returns the first position it was found at', function() {
    
    // const foundAt = [0, 1, 1, 1].findIndex(item => item = 1);
    const foundAt = [0, 1, 1, 1].findIndex(x => x === 1);
    // started where x === 1
    
    assert.equal(foundAt, 1);
  });
  it('returns `-1` when nothing was found', function() {
    
    // const foundAt = [1, 2, 3].findIndex(item => item > 1);
    const foundAt = [1, 2, 3].findIndex(x => x < 1);
    // changed to be looking for something less than 1 since it dosent exist
    
    assert.equal(foundAt, -1);
  });
  it('the findIndex callback gets the item, index and array as arguments', function() {
    
    const three = 3;
    const containsThree = arr => arr.indexOf(three) > -1;
    
    // function theSecondThree(index, arr) {
    function theSecondThree(item, index, arr) {
    // needed to add the item param so it didnt read index as item 
      
      const preceedingItems = arr.slice(0, index);
      return containsThree(preceedingItems);
    }
    const foundAt = [1, 1, 2, 3, 3, 3].findIndex(theSecondThree);
    
    assert.equal(foundAt, 4);
  });
  it('combined with destructuring complex compares become short', function() {
    const bob = {name: 'Bob'};
    const alice = {name: 'Alice'};
    
    // const foundAt = [bob, alice].findIndex(({name:{length:l}}) => length > 3);
    const foundAt = [bob, alice].findIndex(({name:{length}}) => length > 3);
    // removed :1 from length allowing it to look at all lengths
    
    assert.equal(foundAt, 1);
  });
});
