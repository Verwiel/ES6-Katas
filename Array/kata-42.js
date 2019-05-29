// 42: array - `Array.prototype.keys`
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.keys` returns an iterator for all keys in the array', () => {
  it('`keys()` returns an iterator', function() {
    
    // const arr = ['a', 'b'];
    // const iterator = arr.keys();
    const arr = ['a'];
    const iterator = arr.keys();
    // removed 1st index from array, making 0 = a, and 1 = void and done since its the last
    
    assert.deepEqual(iterator.next(), {value: 0, done: false});
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('gets all keys', function() {
    
    // const arr = ['a', 'b'];
    // const keys = Array.from(arr.keys());
    const arr = ['a', 'b', 'c'];
    const keys = Array.from(arr.keys());
    // assert wanted a 2nd index so i added one in the array to be 'c'
    
    assert.deepEqual(keys, [0, 1, 2]);
  });
  it('empty array contains no keys', function() {
    
    // const arr = ['empty me'];
    // const keys = [...arr.keys()];
    const arr = [];
    const keys = [...arr.keys()];
    // removed string that wanted to be removed, empty array has no keys
    
    assert.equal(keys.length, 0);
  });
  it('a sparse array without real values has keys though', function() {
    
    // const arr = [,,];
    // const keys = [...arr.___()];
    const arr = [,,];
    const keys = [...arr.keys()];
    // even though there are no values, there a still keys since commas left indexs
    
    assert.deepEqual(keys, [0, 1]);
  });
  it('also includes holes in sparse arrays', function() {
    
    // const arr = ['a', , 'c'];
    // const keys = arr.keys;
    const arr = ['a', , 'c'];
    const keys = [...arr.keys()];
    // changed to a spread operator of arr with the keys function like the above answer
    // allows the empty space to still be a key
    
    assert.deepEqual(keys, [0, 1, 2]);
  });
});
