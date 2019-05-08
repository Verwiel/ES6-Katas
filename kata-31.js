// 31: array - `Array.prototype.fill` method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.prototype.fill` can fill up an array with one value', () => {
  it('`fill(0)` will populate `0` into each array element', function() {
    
    // const arr = new Array(3).fill();
    const arr = new Array(3).fill(0);
    // added fill 0 to replace all the values in the array with 0s
    
    assert.deepEqual(arr, [0, 0, 0]);
  });
  it('fill only changes content, adds no new elements', function() {
    
    // const arr = [undefined].fill(0);
    const arr = [].fill(0);
    // made an empty array. cant fill an empty array so it = nothing
    
    assert.deepEqual(arr, []);
  });
  it('second parameter to `fill()` is the position where to start filling', function() {
    
    // const fillPosition = 0;
    // const arr = [1,2,3].fill(42, fillPosition);
    const fillPosition = 2;
    const arr = [1,2,3].fill(42, fillPosition);
    // changed fillPosition to 2 because we want to start the fill at index 2

    assert.deepEqual(arr, [1, 2, 42]);
  });
  it('third parameter is the position where filling stops', function() {
    
    // const fillStartAt = 1;
    // const fillEndAt = 1;
    // const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
    const fillStartAt = 1;
    const fillEndAt = 2;
    const arr = [1,2,3].fill(42, fillStartAt, fillEndAt);
    // changed fill end to be 2 so that it wouldnt mess with the 2nd index
    
    assert.deepEqual(arr, [1, 42, 3]);
  });
});
