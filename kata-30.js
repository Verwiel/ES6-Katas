// 30: array - `Array.of` static method
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`Array.of` creates an array with the given arguments as elements', () => {
  it('dont mix it up with `Array(10)`, where the argument is the array length', () => {
    
    // const arr = Array(10);
    const arr = Array.of(10);
    // makes an array with the value of 10
    
    assert.deepEqual(arr, [10]);
  });
  it('puts all arguments into array elements', () => {
    
    // const arr = Array.of();
    const arr = Array.of(1,2);
    //added values of assert to the params of array.of
    
    assert.deepEqual(arr, [1, 2]);
  });
  it('takes any kind and number of arguments', () => {
    
    // const starter = [1, 2];
    // const end = [3, '4'];
    // const arr = Array.of(...starter, ...end);
    const starter = [1, 2];
    const end = [3, '4'];
    const arr = Array.of(starter, ...end);
    // removed spread operator from starter to put it all in an array
    
    assert.deepEqual(arr, [[1, 2], 3, '4']);
  });
});
