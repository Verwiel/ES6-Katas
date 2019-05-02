// 18: rest - as-parameter
// To do: make all tests pass, leave the assert lines unchanged!

describe('Rest parameters in functions', () => {
  it('must be the last parameter', () => {
    
    // const fn = (...rest, veryLast) => {
    const fn = (...rest) => {
    // only parameter is the rest now so it pulls everything
      
      assert.deepEqual([1, 2], rest);
    };
    fn(1, 2);
  });
  it('can be used to get all other parameters', () => {
    
    // const fn = (firstParam, secondParam, rest) => {
    const fn = (firstParam, secondParam, ...rest) => {
    // added elipses in front of rest, skips the first 2 params 
      
      assert.deepEqual([3,4], rest);
    };
    fn(null, 2, 3, 4);
  });
  it('makes `arguments` obsolete', () => {
    
    // const fn = () => {
    const fn = (...args) => {
    //used rest for args to pull everything and still have args
      
      assert.deepEqual([42, 'twenty three', 'win'], args);
    };
    fn(42, 'twenty three', 'win');
  });
  it('eliminate `arguments`!!!', () => {
    
    // const fn = () => arguments;
    // const [firstArg, ...rest] = fn(1, 2, 3);
    const fn = (first, ...rest) => rest;
    const rest = fn(1, 2, 3);
    //got rid of arguments and replaced it with params from const
    //set rest as the fn params
    
    assert.deepEqual([2, 3], rest);
  });
});
