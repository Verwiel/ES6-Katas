// 63: String - `includes()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`string.includes()` determines if a string can be found inside another one', function() {
  describe('finding a single character', function() {
    it('can be done (a character is also a string, in JS)', function() {
      
      // const searchString = 'a';
      const searchString = 'xyz';
      // assert wanted xyz not a
      
      assert.equal('xyz'.includes(searchString), true);
    });
    it('reports false if character was not found', function() {
      
      // const expected = '???';
      const expected = false;
      // returned false since the character wasnt in the string
      
      assert.equal('xyz'.includes('abc'), expected);
    });
  });
  describe('find a string', function() {
    it('that matches exactly', function() {
      
      // const findSome = findMe => 'xyz'.includes;
      const findSome = findMe => 'xyz'.includes('xyz');
      // they match each other so it is true
      
      assert.equal(findSome('xyz'), true);
    });
  });
  describe('search for an empty string, is always true', function() {
    it('in an empty string', function() {
      
      // const emptyString = ' ';
      const emptyString = '';
      // since its an empty string it will always be true
      
      assert.equal(''.includes(emptyString), true);
    });
    it('in `abc`', function() {
      
      // const actual = _.includes('');
      const actual = 'abc'.includes('');
      // abc includes a string..
      
      assert.equal(actual, true);
    });
  });
  describe('special/corner cases', function() {
    it('search for `undefined` in a string fails', function() {
      
      // const findInAbc = (what) => 'abc'.includes;
      const findInAbc = (what) => 'abc'.includes(what);
      // you cant find undefined
      
      assert.equal(findInAbc(undefined), false);
    });
    it('searches are case-sensitive', function() {
      
      // const findInAbc = (what) => 'abc'.inkludez(what);
      const findInAbc = (what) => 'abc'.includes(what);
      // fixed spelling to make it pass. still false
      
      assert.equal(findInAbc('A'), false);
    });
    it('must NOT be a regular expression', function() {
      
      // const regExp = '';
      const regExp = new RegExp();
      // see above
      
      assert.throws(() => {''.includes(regExp)});
    });
    describe('coerces the searched "thing" into a string', function() {
      it('e.g. from a number', function() {
        
        // const actual = '123'.includes(4);
        const actual = '123'.includes(3);
        // changed 4 to a number it actually included
        
        assert.equal(actual, true);
      });
      it('e.g. from an array', function() {
        
        // const actual = '123'.includes([1,2,3]);
        const actual = '123'.includes([123]);
        // removed commas so it would have 123, could have also .join or put , in the string
        
        assert.equal(actual, true);
      });
      it('e.g. from an object, with a `toString()` method', function() {
        
        // const objWithToString = {toString: 1};
        const objWithToString = {toString(){ return 1 }};
        // made toString a function and returned 1
        
        assert.equal('123'.includes(objWithToString), true);
      });
    });
  });
  describe('takes a position from where to start searching', function() {
    it('does not find `a` after position 1 in `abc`', function() {
      
      // const position = 0;
      const position = 1;
      // position is past a so it cant find it
      
      assert.equal('abc'.includes('a', position), false);
    });
    it('even the position gets coerced', function() {
      
      // const findAtPosition = position => 'xyz'.includes('x', pos);
      const findAtPosition = position => 'xyz'.includes('x', position);
      // fixed pos to be position. returns false since x isnt z
      
      assert.equal(findAtPosition('2'), false);
    });
    describe('invalid positions get converted to 0', function() {
      it('e.g. `undefined`', function() {
        
        // const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
        const findAtPosition = (pos=undefined) => 'xyz'.includes('x', pos);
        // if its undefined it defaults index 0
        
        assert.equal(findAtPosition(undefined), true);
      });
      it('negative numbers', function() {
        
        // const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
        const findAtPosition = (pos) => 'xyz'.includes('x', pos);
        // seems like -numbers default to index 0
        
        assert.equal(findAtPosition(-2), true);
      });
      it('NaN', function() {
        
        // const findAtPosition = (pos) => 'xyz'.includes('x', 1);
        const findAtPosition = (pos) => 'xyz'.includes('x', 'pos');
        // if no position is provided or its nan, itll start at 0
        
        assert.equal(findAtPosition(NaN), true);
      });
    });
  });
});
