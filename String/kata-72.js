// 72: String - `startsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.startsWith(searchString)` determines whether `str` begins with `searchString`.', function() {
  const s = 'the string s';
  describe('the 1st parameter, the string to search for', function() {
    it('can be just a character', function() {
      
      // const actual = s.starts_with('t');
      const actual = s.startsWith(`t`);
      // can be a single character
      
      assert.equal(actual, true);
    });
    it('can be a string', function() {
      
      // const expected = '???';
      const expected = true;
      // follow error prompt, outcome is expected to be true
      
      assert.equal(s.startsWith('the'), expected);
    });
    it('can contain unicode characters', function() {
      
      // const nuclear = 'NO ☢ NO';
      const nuclear = '☢';
      // unicode works
      
      assert.equal(nuclear.startsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
      
      // const aRegExp = 'the';
      const aRegExp = /the/;
      // regular expression throws a type error
      
      assert.throws(() => {''.startsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where to start searching from', function() {
    it('e.g. find "str" at position 4', function() {
      
      // const position = 3;
      const position = 4;
      // 2nd param is index to start searching
      
      assert.equal(s.startsWith('str', position), true);
    });
    it('for `undefined` is the same as 0', function() {
      
      // const _undefined_ = '1';
      const _undefined_ = 'hi';
      // if undefined it will be 0
      
      assert.equal(s.startsWith('the', _undefined_), true);
    });
    it('the parameter gets converted to an int', function() {
      
      // const position = 'four';
      const position = '4';
      // converts number strings to ints
      
      assert.equal(s.startsWith('str', position), true);
    });
    it('a value larger than the string`s length, returns false', function() {
      
      // const expected = true;
      const expected = false;
      // cant search past what exists
      
      assert.equal(s.startsWith(' ', s.length + 1), expected);
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
      
      // let aBool;
      let aBool = false;
      // prompt wanted false, just showing that booleans work
      
      assert.equal(String.prototype.startsWith.call(aBool, 'false'), true);
    });
    it('e.g. a number', function() {
      
      // let aNumber = 19;
      let aNumber = '19';
      // can concantenate strings
      
      assert.equal(String.prototype.startsWith.call(aNumber + 84, '1984'), true);
    });
    it('also using the position works', function() {
      
      // const position = 0;
      const position = 1;
      // found 99 by starting the search at 1
      
      assert.equal(String.prototype.startsWith.call(1994, '99', position), true);
    });
  });
});
