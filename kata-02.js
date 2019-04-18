// 2: template strings - multiline
// To do: make all tests pass, leave the asserts unchanged!
// Follow the hints of the failure messages!

describe('Template string, can contain multiline content', function() {
    it('wrap it in backticks (`) and add a newline, to span across two lines', function() {
      
      // var normalString = `line1 //// line3`;
      var normalString = `line1\n\nline3`;
      //the same thing as the assert, \n will create a new line
  
      assert.equal(normalString, 'line1\n\nline3');
    });
    it('even over more than two lines', function() {
      
      // var multiline = ``;
      var multiline = `line1\n\n\nline3`;
      //adding another \n will add another line
          
        
      assert.equal(multiline.split('\n').length, 4);
    });
    describe('and expressions inside work too', function() {
      var x = 42;
      it('like simple variables', function() {
        
        // var multiline = `line 1 $ {x}`;
        var multiline =`line 1\n\n      ${x}`;
        //added space since tabs were being funky, called x
  
        assert.equal(multiline, 'line 1\n\n      42');
      });
      it('also here spaces matter', function() {
        
        // var multiline = ``;
        var multiline = `\n\n${x}`;
        //since theres no space in the assert, i kept the space out and called the variable 
  
        assert.equal(multiline, '\n\n42');
      });
    });
  });
  