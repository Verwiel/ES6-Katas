// 20: spread - with-arrays
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Spread syntax with arrays', () => {
  describe('basically', () => {
    it('expands the items of an array by prefixing it with `...`', function() {
      
      // const middle = [1, 2, 3];
      // const arr = [0, middle, 4];
      const middle = [1, 2, 3];
      const arr = [0, ...middle, 4];
      //spread operator to pull in the middle variable
      
      assert.deepEqual(arr, [0, 1, 2, 3, 4]);
    });
    it('an empty array expanded is no item', function() {
      
      // const arr = [0, [], 1];
      const arr = [0, ...[], 1];
      //used the spread operator on the empty array
      
      assert.deepEqual(arr, [0, 1]);
    });
  });
  describe('is (in a way) the opposite to the rest syntax', function() {
    it('both use `...` to either expand all items and collect them', function() {
      
      // const [...rest] = [...[,1, 2, 3, 4, 5]];
      const [...rest] = [...[1, 2, 3, 4, 5]];
      // removed leading comma so it counted 1 at index 0
      
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    it('rest syntax must be last in an array, spread can be used in any place', function() {
      
      // const [a, b, ...rest] = [1, [2, 3], 4, 5];
      const [a, b, ...rest] = [1, ...[2, 3], 4, 5];
      //put spread in front of the 2,3 array. 
      
      assert.equal(a, 1);
      assert.equal(b, 2);
      assert.deepEqual(rest, [3, 4, 5]);
    });
  });
  describe('used as function parameter', () => {
    it('prefix with `...` to spread as function params', function() {
      
      // const magicNumbers = [1, 2];
      // const fn = (magicA, magicB) => {
      const magicNumbers = [1, 2];
      const fn = (magicA, magicB) => {
      //added spread to the function call (below the asserts)  
        
        assert.deepEqual(magicNumbers[0], magicA);
        assert.deepEqual(magicNumbers[1], magicB);
      };
      fn(...magicNumbers);
    });
    it('pass an array of numbers to Math.max()', function() {
      
      // const max = Math.max(...[23, 0, 42, 43]);
      const max = Math.max(...[23, 0, 42]);
      // removed the 43 since it was higher than the 42
      
      assert.equal(max, 42);
    });
  });  
  describe('used as constructor parameter', () => {
    it('just like in a function call (is not possible using `apply`)', () => {
      
      // class X {
      //   constructor(a, b, c) { return [a, b, c]; }
      // }
      // const args = [1];
      class X {
        constructor(a, b, c) { return [a, b, c]; }
      }
      const args = [1, 2, 3];
      //added 2 and 3 to the args array. since it needs to return as stated in class
      // constructor just shows the initial values
      
      assert.deepEqual(new X(...args), [1, 2, 3]);
    });
  });
});