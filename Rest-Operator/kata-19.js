// 19: rest - with-destructuring
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Rest parameters with destructuring', () => {
  it('must be last', () => {
    
    // const [...all, last] = [1, 2, 3, 4];
    const [...all] = [1, 2, 3, 4];
    //same as with rest, it needs to be last
    
    assert.deepEqual(all, [1, 2, 3, 4]);
  });
  it('assign rest of an array to a variable', () => {
    
    // const [...all] = [1, 2, 3, 4];
    const [first, ...all] = [1, 2, 3, 4];
    //wanted everything after first, so used all 
    
    assert.deepEqual(all, [2, 3, 4]);
  });
  // the following are actually using `spread` ... oops, to be fixed #TODO
  it('concat differently', () => {
    
    // const theEnd = [3, 4];
    // const allInOne = [1, 2, ...[theEnd]];
    const theEnd = [3, 4];
    const allInOne = [1, 2, ...theEnd];
    //spread to the end didnt need to be in an array since it was already declared as an array
    
    assert.deepEqual(allInOne, [1, 2, 3, 4]);
  });
  it('`apply` made simple, even for constructors', () => {
    
    // const theDate = [2015, 1, 1];
    // const date = new Date(theDate);
    const theDate = [2015, 1, 1];
    const date = new Date(...theDate);
    //added spread operator in front of theDate
    
    assert.deepEqual(new Date(2015, 1, 1), date);
  });
});