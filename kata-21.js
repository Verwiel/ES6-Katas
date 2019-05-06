// 21: spread - with-strings
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with strings', () => {
  it('expands each character of a string by prefixing it with `...`', function() {
    
    // const [b, a] = [...'ab'];
    const [b, a] = [...'ba'];
    //swapped ba and a to pull from the right positions in the string
    
    assert.equal(a, 'a');
    assert.equal(b, 'b');
  });
  it('expands any kind of character', function() {
    
    // const arr = [...'12'];
    const arr = [...'1 ☢ 2'];
    
    
    assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
  });
  it('works anywhere inside an array (must not be last)', function() {
    
    // const letters = ['a', 'bcd', 'e', 'f'];
    const letters = ['a', ...'bcd', 'e', 'f'];
    //seperated out string bcd so it added indexes for each
    
    
    assert.equal(letters.length, 6);
  });
  it('don`t confuse with the rest operator', function() {
    
    // const [...rest] = ['1234', ...'5'];
    const [...rest] = [...'12345'];
    // combined all numbers so they would seperate by index
    
    
    assert.deepEqual(rest, [1, 2, 3, 4, 5]);
  });
  it('can also be used as function parameter', function() {
    
    // const max = Math.max('12345');
    const max = Math.max(...'12345');
    //seperated out 12345 so it would be able to find the max number (5)
    
    
    assert.deepEqual(max, 5);
  });
});
