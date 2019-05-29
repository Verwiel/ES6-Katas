// 47: Set - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Set` lets you store unique values of any type', function(){
  it('`Set` is a new global constructor function', function() {
    
    // const typeOfSet = '???';
    const typeOfSet = typeof Set;
    // just shows the type of Set
    
    assert.equal(typeof Set, typeOfSet);
  });
  it('every value in a set is unique', function() {
    let set = new Set();
    
    set.add(1);
    set.add(1);
    // const expectedSize = 2;
    const expectedSize = 1;
    // if each value is unique the size would have to be 1, could also be achieved by
    // changing the set.add(2)
    
    assert.equal(set.size, expectedSize);
  });
  it('the string "1" is different to the number 1', function() {
    let set = new Set();
    
    // set.add(1);
    set.add(1);
    set.add('1');
    // shows that they arnt the same, since the size comes out to be 2
    
    assert.equal(set.size, 2);
  });
  it('even NaN is equal to NaN', function() {
    let set = new Set();
    
    // set.add(NaN);
    // set.add(Na);
    set.add(NaN);
    set.add(NaN);
    // all types can be equal to each other
    
    assert.equal(set.size, 1);
  });
  it('+0 and -0 are seen as equal', function() {
    let set = new Set();
    
    // set.add(+0);
    // set.add(0);
    // set.add('-0');
    set.add(+0);
    set.add(0);
    set.add(-0);
    // basically all 0s are going to be equal since its the absence of a value
    
    assert.deepEqual([...set.values()], [+0]);
  });
});
