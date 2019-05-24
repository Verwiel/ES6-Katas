// 60: Reflect - getPrototypeOf 
// To do: make all tests pass, leave the assert lines unchanged!

describe('`Reflect.getPrototypeOf` returns the prototype', function() {
  it('works like `Object.getPrototypeOf`', function() {
    
    // const viaObject = Object.getPrototypeOf({});
    // const viaReflect = Reflect.getPrototypeOf();
    const viaObject = Object.getPrototypeOf({});
    const viaReflect = Reflect.getPrototypeOf({});
    // works the same whether youre using object or reflect
    
    assert.strictEqual(viaObject, viaReflect);
  });
  it('throws a TypeError for a non-object', function() {
    
    // let fn = () => { Reflect.getPrototypeOf({}) };
    let fn = () => { Reflect.getPrototypeOf() };
    // if theres not an object its going to have a typeerror
    
    assert.throws(fn, TypeError);
  });
  it('a `new Set()` has a prototype', function() {
    
    // const aSet = Set;
    const aSet = new Set();
    // added new and called it in the assignment
    
    assert.equal(Reflect.getPrototypeOf(aSet), Set.prototype);
  });
  it('for a class, it is `Klass.prototype`', function() {
    
    // class Klass {}
    // const proto = new Klass();
    class Klass {}
    const proto = Reflect.getPrototypeOf(new Klass());
    // needed to add the get prototype of and then put in new class
    
    assert.equal(proto, Klass.prototype);
  });
  it('works also for an old-style "class"', function() {
    
    // function Klass() {}
    // const proto = Reflect.getPrototypeOf();
    function Klass() {}
    const proto = Reflect.getPrototypeOf(new Klass ());
    // works with both syntaxs of class
    
    assert.equal(proto, Klass.prototype);
  });
  it('an array has a prototype too', function() {
    
    // let arr = [];
    // const expectedProto = Array;
    let arr = [];
    const expectedProto = Array.prototype;
    // added .prototype to array
    
    assert.equal(Reflect.getPrototypeOf(arr), expectedProto);
  });

  // TODO
  // it('getting the prototype of an "exotic namespace object" returns `null`', function() {
  //   http://www.ecma-international.org/ecma-262/6.0/#sec-module-namespace-exotic-objects-getprototypeof
  //   Don't know how to write a test for this yet, without creating a dep in tddbin hardcoded
  //   PRs welcome
  //   assert.equal(Reflect.getPrototypeOf(namespace exotic object), null);
  // });
});