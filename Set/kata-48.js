// 48: Set - add
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`add()` appends a new element to the end of a Set object.', function(){
  let set;
  beforeEach(() => set = new Set());
  it('adds every value, of any type, only once', function() {
    const fn = () => {};
    set.add(1);
    set.add(1);
    set.add(fn);
    set.add(fn);
    // even though there are 4 lines of code, its only counting 2 of them
    assert.equal(set.size, 2);
  });
  it('is chainable', function() {
    
    // set.add.add;
    set.add(1)
      .add(2);
    // chained two adds together, needed to have a 2
    
    assert.equal(set.has(2), true);
  });
  it('call without params adds undefined', function() {
    
    // set.add
    set.add()
    // called it without giving it any params. has a value of undefined
    
    assert.equal(set.has(void 0), true);
  });
  it('0, -0 and +0 are equal', function() {
    
    // set.add();
    set.add(0);
    // needed to have a 0, doesnt matter + - or normal
    
    assert.equal(set.has(+0), true);
  });
});
