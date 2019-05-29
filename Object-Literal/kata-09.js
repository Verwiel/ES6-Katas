// 9: object-literals - basics
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('The object literal allows for new shorthands', () => {
  const x = 1;
  const y = 2;
  describe('with variables', () => {
    it('the short version for `{x: x}` is {x}', () => {
      
      // const short = {x};
      const short = {y};
      //changed x to y because its asking for shorthand y
      
      assert.deepEqual(short, {y: y});
    });
    it('works with multiple variables too', () => {
      
      // const short = {x, y: z};
      const short = {x, y};
      //removed z because all that matteres is x and y for this one
      
      assert.deepEqual(short, {x: x, y: y});
    });
  });
  describe('with methods', () => {
    const func = () => func;
    it('using the name only uses it as key', () => {
      
      // const short = {it};
      const short = {func};
      //put the name of the function in to shorthand call it
      
      assert.deepEqual(short, {func: func});
    });
    it('a different key must be given explicitly, just like before ES6', () => {
      
      // const short = {func};
      const short = {otherKey: func};
      //if using a different key, you need to add the key: for it to work, like in ES5
      
      
      assert.deepEqual(short, {otherKey: func});
    });
    it('inline functions, can written as `obj={func(){}}` instead of `obj={func:function(){}}`', () => {
      
      
      // const short = {
      //   inlineFunc: 'I am inline'
      // };
      const short = {
        inlineFunc() {
          return 'I am inline'
        }
      }
      //returned string inside of function. inline means that you decalre things inside of the func
   
      
      
      assert.deepEqual(short.inlineFunc(), 'I am inline');
    });
  });
});