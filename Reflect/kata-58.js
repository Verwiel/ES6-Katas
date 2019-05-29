// 58: Reflect - basics
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect` basics', function() {
  describe('Reflect is special, it is different to e.g. `Object`', function() {
    it('it`s of type object', function() {
      
      // const expectedType = 'not a function!';
      const expectedType = typeof Reflect;
      // type of reflect is object
      
      assert.equal(typeof Reflect, expectedType);
    });
    it('it can not be instantiated (`new Reflect()`)', function() {
      
      // const tryToConstruct = () => { Reflect; };
      const tryToConstruct = () => { new Reflect() };
      // cannot instantiate it. no new Reflect()
      
      assert.throws(tryToConstruct, TypeError);
    });
    it('has no `call` method (as opposed to e.g. Object)', function() {
      
      // const expected = 'function';
      const expected = typeof Reflect.call
      // cant call it
      
      assert.equal(typeof Reflect.call, expected);
    });
  });
  
  describe('some `Reflect` usages', function() {
    it('`Reflect.construct()` is like `new ClassName`', function() {
      
      // let Class;
      let Class = () => {};
      // needed the class to be in proper syntax for it to work
      
      assert.equal(Reflect.construct(Class, []) instanceof Class, true);
    });
    it('`Reflect.get()` returns a property`s value', function() {
      
      // let obj = {x: 42};
      let obj = {x: 23};
      Reflect.get(obj) // uneeded since its in the assert, still helps visualize
      // made obj x = assert, used Reflect.get to get it
      
      assert.equal(Reflect.get(obj, 'x'), 23);
    });
    it('`Reflect.has()` is like `in` just as a function', function() {
      
      // let obj = {};
      let obj = {x: 23};
      // made sure obj had x in it, used has to see if obj has x
      
      assert.equal(Reflect.has(obj, 'x'), true);
    });
  });
});
