// 3: template strings - tagged
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Tagged template strings, are an advanced form of template strings', function() {
  it('syntax: prefix a template string with a function to call (without "()" around it)', function() {
    function tagFunction(s) {
      return s.toString();
    }
    
    // var evaluated = tagFunc `template string`;
    var evaluated = tagFunction `template string`;
    //needed to change fun to function
    
    assert.equal(evaluated, 'template string');
  });
  describe('the tag function can access each part of the template', function() {
    describe('the 1st parameter receives only the pure strings of the template string', function() {
      function tagFunction(strings) {
        return strings;
      }
      it('the strings are an array', function() {
        
        // var result = 'template string';
        var result = tagFunction `template string`;
        //needed to change to backticks and add function
        
        assert.deepEqual(tagFunction`template string`, result);
      });
      it('expressions are NOT passed to it', function() {
        
        // var tagged = tagFunction`one${23}`;
        var tagged = tagFunction `one${23}two`;
        //added two and backticks
        
        assert.deepEqual(tagged, ['one', 'two']);
      });
    });
    describe('the 2nd and following parameters contain the values of the processed substitution', function() {
      var one = 1;
      var two = 2;
      var three = 3;
      it('the 2nd parameter contains the first expression`s value', function() {
        
        // function firstValueOnly(strings, first_value) {
        function firstValueOnly(strings, first_value) {
          return first_value;
        }
        //changed the return to match the function
        
        
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 1);
      });
      it('the 3rd parameter contains the second expression`s value', function() {
        function firstValueOnly(strings, firstValue, secondValue) {
          return secondValue;
        }
        //changed to have secondValue
        
        assert.equal(firstValueOnly`uno ${one}, dos ${two}`, 2);
      });
      it('using ES6 rest syntax, all values can be accessed via one variable', function() {
        
        
        // function valuesOnly(stringsArray, ...allValues) {
        function valuesOnly(stringsArray, ...allValues) { // using the new ES6 rest syntax
          return allValues;
        }
        //changes the return to allValues
        
        assert.deepEqual(valuesOnly`uno=${one}, dos=${two}, tres=${three}`, [1, 2, 3]);
      });
    });
  });
});