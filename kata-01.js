// 1: template strings - basics
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('A template string, is wrapped in ` (backticks) instead of \' or "', function() {
  describe('by default, behaves like a normal string', function() {
    it('just surrounded by backticks', function() {
      
      var str = `like a string`;
       //made var str = to assert.equal string, using back ticks
      
      assert.equal(str, 'like a string');
    });
  });

  var x = 42;
  var y = 23;
  
  describe('can evaluate variables, which are wrapped in "${" and "}"', function() {
    it('e.g. a simple variable "${x}" just gets evaluated', function() {
      
      var evaluated = `x=${x}`;
      
      
      assert.equal(evaluated, 'x=' + x);
    });
    it('multiple variables get evaluated too', function() {
      
      var evaluated = `${x}+${y}`; 
      //needs to be in back ticks, all variables need to be in brackets.
      
      assert.equal(evaluated, x + '+' + y);
    });
  });

  describe('can evaluate any expression, wrapped inside "${...}"', function() {
    it('all inside "${...}" gets evaluated', function() {
      
      var evaluated = `${ x + y }`;
      //can run mutiple variables inside brackets
      
      assert.equal(evaluated, x+y);
    });
    it('inside "${...}" can also be a function call', function() {
      function getDomain(){ 
        return document.domain; 
      }
      
      var evaluated = `${getDomain()}`;
      //need to call the function inside brackets, make sure to include ()
      
      
      assert.equal(evaluated, 'tddbin.com');
    });
  });
});

