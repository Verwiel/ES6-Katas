// 13: destructuring - defaults
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('When destructuring you can also provide default values', () => {
  it('just assign a default value, like so `a=1`', () => {
    
    // const [a:1] = [];
    const [a=1] = [];
    //a = instead of a: for a default value
    
    assert.equal(a, 1);
  });
  it('for a missing value', () => {
    
    // const [b=2] = [1,,3];
    const [,b=2] = [1,,3];
    //leading comma the b so it draws from index 1
    
    assert.equal(b, 2);
  });
  it('in an object', () => {
    
    // const [a, b=2] = {a: 1};
    const {a, b=2} = {a: 1};
    //changed the array into an object to destructure
    
    assert.equal(b, 2);
  });
  it('if the value is undefined', () => {
    
    // const {a, b} = {a: 1, b: void 0};
    const {a, b=2} = {a: 1, b: void 0};
    //set b = 2 so it overrode the void value
    
    assert.strictEqual(b, 2);
  });
  it('also a string works with defaults', () => {
    
    // const [b=2] = '1';
    const [a, b=2] = '1';
    //put an a, in variables so a will be 1 and b will be 2, only diff is that its a string
    
    assert.equal(a, '1');
    assert.equal(b, 2);
  });
});