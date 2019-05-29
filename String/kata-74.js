// 74: String - `endsWith()` 
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('`str.endsWith(searchString)` determines whether `str` ends with `searchString`', function() {
  const s = 'el fin';
  describe('the 1st parameter the string to search for', function() {
    it('can be a character', function() {
      
      // const doesEndWith = s.doesItReallyEndWith('n');
      const doesEndWith = s.endsWith('n');
     // endsWith checks to see if it ends with a character
     
      assert.equal(doesEndWith, true);
    });
    it('can be a string', function() {
      
      // const expected = false;
      const expected = true;
      // can be a string
      
      assert.equal(s.endsWith('fin'), expected);
    });
    it('can contain unicode characters', function() {
     
      // const nuclear = 'NO ☢ Oh NO!';
      const nuclear = '☢';
      // can be unicode
     
      assert.equal(nuclear.endsWith('☢'), true);
    });
    it('a regular expression throws a TypeError', function() {
    
      // const aRegExp = '/the/';
      const aRegExp = /the/;
      // cant be a regular expression
    
      assert.throws(() => {''.endsWith(aRegExp)}, TypeError);
    });
  });
  describe('the 2nd parameter, the position where the search ends (as if the string was only that long)', function() {
    it('find "el" at a substring of the length 2', function() {
    
      // const endPos = 0;
      const endPos = 2;
      // second param is where the search ends
    
      assert.equal(s.endsWith('el', endPos), true);
    });
    it('`undefined` uses the entire string', function() {
    
      // const _undefined_ = 'i would like to be undefined';
      const _undefined_ = void 0;
      // if the param is undefined it searches the entire string
     
      assert.equal(s.endsWith('fin', _undefined_), true);
    });
    it('the parameter gets coerced to an integer (e.g. "5" becomes 5)', function() {
    
      // const position = 'five';
      const position = '5';
      // parameter becomes integer
    
      assert.equal(s.endsWith('fi', position), true);
    });
    describe('value less than 0', function() {
      it('returns `true`, when searching for an empty string', function() {
     
        // const emptyString = '??';
        const emptyString = '';
        // considered less than 0 if its an empty string
     
        assert.equal('1'.endsWith(emptyString, -1), true);
      });
      it('return `false`, when searching for a non-empty string', function() {
     
        // const notEmpty = '';
        const notEmpty = 'hi';
        // false if the strings not empty and searching less than 0
      
        assert.equal('1'.endsWith(notEmpty, -1), false);
      });
    });
  });
  describe('this functionality can be used on non-strings too', function() {
    it('e.g. a boolean', function() {
    
      // let aBool = true;
      let aBool = false;
      // works with booleans, provides 2 since false and returns lse
    
      assert.equal(String.prototype.endsWith.call(aBool, 'lse'), true);
    });
    it('e.g. a number', function() {
    
      // let aNumber = 0;
      let aNumber = 84;
      // like the previous examples, numbers work.
     
      assert.equal(String.prototype.endsWith.call(aNumber + 1900, 84), true);
    });
    it('also using the position works', function() {
     
      // const position = '??';
      const position = '3';
      // position works as well.
     
      assert.equal(String.prototype.endsWith.call(1994, '99', position), true);
    });
  });
});
