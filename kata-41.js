// 41: array - entries
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`[].entries()` returns an iterator object with all entries', function() {
  it('returns key+value for each element', function() {
    
    // const arr = ['a', 'b', 'c'];
    // const entriesAsArray = Array.from(arr.___());
    const arr = ['a', 'b', 'c'];
    const entriesAsArray = Array.from(arr.entries());
    // used .entries to return key value pairs based off index
    
    assert.deepEqual(entriesAsArray, [[0,"a"], [1,"b"], [2,"c"]]);
  });
  it('empty elements contain the value `undefined`', function() {
    
    // const arr = ['one'];
    // arr[2] = 'three';
    // const secondValue = arr.entries();
    const arr = ['one'];
    arr[2] = 'three';
    const secondValue = Array.from(arr.entries())[1];
    // made a new array from the given entries [1, undefined, 3]. checked the index 1 for undefined
    
    assert.deepEqual(secondValue, [1, void 0]);
  });
  describe('returns an iterable', function() {
    it('has `next()` to iterate', function() {
      
      // const arr = ['one'];
      // const value = arr;
      const arr = ['one'];
      const value = arr.entries().next().value;
      // created the key value pairs through entries. used next iterate value.
      
      assert.deepEqual(value, [0, 'one']);
    });
  });
});
