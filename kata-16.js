// 16: object-literal - computed properties
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Object literal properties may be computed values', () => {
  it('a computed property `x` needs to be surrounded by `[]`', () => {
    
    // const propertyName = 'x';
    // const obj = {propertyName: 1};
    const propertyName = 'x';
    const obj = {[propertyName]: 1};
    //put propertyName in brackets
    
    assert.equal(obj.x, 1);
  });
  it('can also get a function assigned', () => {
    
    // const key = 'func';
    // const obj = {[key]: 'seven'};
    const key = 'func';
    const obj = {[key]() {return 'seven'}};
    //changed key into a function within obj
    
    assert.equal(obj.func(), 'seven');
  });
  it('the key may also be the result of a function call', () => {
    
    // const getName = () => 'propertyName';
    // const obj = {[getName]() {return 'seven'}};
    const getName = () => 'propertyName';
    const obj = {[getName ()]() {return 'seven'}};
    //called the function instead of just a variable
    
    assert.equal(obj.propertyName(), 'seven');
  });
  it('the key can also be constructed by an expression', () => {
    
    // const what = 'Key';
    // const obj = {['proper' + what]: null};
    const what = 'Name';
    const obj = {['property' + what]: null};
    //fixed the strings to match the assert
    
    assert('propertyName' in obj);
  });
  it('accessor keys can be computed names too', () => {
    
    // const obj = {
    //   set ['key'](_) {return 1},
    const obj = {
      get ['key']() {return 1},
      
      
    };
    assert.equal(obj.key, 1);
  });
});
