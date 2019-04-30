// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
  it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
    
    // let firstValue = [1];
    let firstValue = [1];
      firstValue = firstValue.shift();
    //added 2nd line, shift takes the first item of an array
    
    assert.strictEqual(firstValue, 1);
  });
  it('get the last item from array', () => {
    
    // let lastValue = [1, 2, 3];
    let lastValue = [1, 2, 3];
      lastValue = lastValue.pop()
    //pulled just the three from the array since its the last value pop will work
    
    assert.strictEqual(lastValue, 3);
  });
  it('swap two variables, in one operation', () => {
    let [x, y] = ['ax', 'why'];
    
    // [x, y] = [x, y];
      [x, y] = [x, y].reverse()
    //swapped x and y's using .reverse()
    
    assert.deepEqual([x, y], ['why', 'ax']);
  });
  it('leading commas', () => {
    const all = ['ax', 'why', 'zet'];
    
    // const [,z] = all;
    const [,,z] = all;
    //adding commas moves the value down the array
    
    assert.equal(z, 'zet');
  });
  it('extract from nested arrays', () => {
    const user = [['Some', 'One'], 23];
    
    // const [[firstName, surname], age] = user;
    const [[firstName, surname], age] = user;
    //made the array match the user array
    
    const expected = 'Some One = 23 years';
    assert.equal(`${firstName} ${surname} = ${age} years`, expected);
  });
  
  it('chained assignments', () => {
    let c, d;
    // let a, b = [c, d] = [1, 2];
    let [a, b] = [c, d] = [1, 2];
    //put ab in brackets to make the arrays = to each other
    
    assert.deepEqual([a, b, c, d], [1, 2, 1, 2]);
  });
  
  it('in for-of loop', () => {
    
    for (var [,a, b] of [[0, 1, 2]]) {}
    //added a leading comma in front of a so it matched the second array
    
    assert.deepEqual([a, b], [1, 2]);
  });
});
