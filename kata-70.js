// 70: Set - clear
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`clear()` removes all elements from a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('`set.size` becomes 0', function() {
    
    // set.add('one').add(2);
    // set.clear();
    // var expectedSize;
    set.add('one').add(2);
    set.clear();
    var expectedSize = 0;
    // after a clear the expected size will be 0
    
    assert.equal(set.size, expectedSize);
  });
  it('the iterator `set.entries()` will not contain any items', function() {
    
    // set.add('one').add(2);
    // set.clear;
    // const {done} = set.entries().next();
    set.add('one').add(2);
    set.clear();
    const {done} = set.entries().next();
    // after a clear there will be no entries
    
    assert.equal(done, true);
  });
  it('any call to `set.has()` returns false', function() {
    
    // set.add('one').add(2);
    set.add('one').add(2);
    set.clear()
    // since its cleared there are no has() values
    
    assert.deepEqual(set.has(2), false);
  });
  it('returns `undefined`', function() {
    
    // var expectedReturn = true;
    var expectedReturn = undefined;
    // follow prompt
    
    assert.equal(set.clear(), expectedReturn);
  });
});
