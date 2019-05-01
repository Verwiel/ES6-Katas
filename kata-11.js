// 11: destructuring - string
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring also works on strings', () => {
  it('destructure every character, just as if the string was an array', () => {
    
    // let a, b, c = 'abc';
    let [a, b, c] = 'abc';
    //index in array will equal index in string, to destructure variable has to be in array
    
    
    assert.deepEqual([a, b, c], ['a', 'b', 'c']);
  });
  it('missing characters are undefined', () => {
    
    // const [a, c] = 'ab';
    const [a, b, c] = 'ab';
    //added a b so that there would be no third index for c in the string
    
    assert.equal(c, void 0);
  });
  it('unicode character work too', () => {
    
    // const [space, coffee] = 'a ☕';
    const [space, coffee] = 'a☕';
    //removed the space in the string since it was technically a index
    
    assert.equal(coffee, '\u{2615}');
  });
});
