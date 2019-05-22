// 43: array - `Array.prototype.values` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.values` returns an iterator for all values in the array', () => {
  it('`values()` returns an iterator', function() {
    
    // const arr = ['k', 'e', 'y'];
    // const iterator = arr.values();
    const arr = [];
    const iterator = arr.values();
    // wanted the value to be void and done to be true so i emptied the array
    
    assert.deepEqual(iterator.next(), {value: void 0, done: true});
  });
  it('use `iterator.next()` to drop first value', function() {
    
    // const arr = ['keys', 'values', 'entries'];
    // const iterator = arr.values();
    // iterator.___();
    const arr = ['keys', 'values', 'entries'];
    const iterator = arr.values();
    iterator.next();
    // using .next removed keys from the array
    
    assert.deepEqual([...iterator], ['values', 'entries']);
  });
  it('empty array contains no values', function() {
    
    // const arr = [...[...[...[...'1']]]];
    // const values = [...arr.values()];
    const arr = [...[...[...[]]]];
    const values = [...arr.values()];
    // changed it so it drilled into an empty array, therefor having no values
    
    assert.equal(values.length, 0);
  });
  it('a sparse array without real values has values though', function() {
    
    // const arr = [, 0];
    // const keys = [...arr.values()];
    const arr = [,,];
    const keys = [...arr.values()];
    // even though the array has no real values, the , leave places for them
    
    assert.deepEqual(keys, [void 0, void 0]);
  });
  it('also includes holes in sparse arrays', function() {
    
    // const arr = ['a',];
    const arr = ['a', , 'c'];
    // made it match the assert, leaving a real value out for index 1
    
    assert.deepEqual([...arr.values()], ['a', void 0, 'c']);
  });
});
