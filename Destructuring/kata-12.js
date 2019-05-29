// 12: destructuring - object
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructure objects', () => {
  it('by surrounding the left-hand variable with `{}`', () => {
    
    // const x = {x: 1};
    const {x} = {x: 1};
    //pulling out the value of the key in the object
    
    assert.equal(x, 1);
  });
  describe('nested', () => {
    it('multiple objects', () => {
      
      
      // const magic = {first: 23, second: 42};
      // const {magic: [second]} = {magic};
      const magic = {first: 23, second: 42};
      const {magic: {second}} = {magic};
      //replaced [] with {} around second since were desctructuring it
      
      assert.equal(second, 42);
    });
    it('object and array', () => {
      
      // const {z:[x]} = {z: [23, 42]};
      const {z:[,x]} = {z: [23, 42]};
      //put a leading comma in front fo x so it pulled from index 1 of the array
      
      assert.equal(x, 42);
    });
    it('array and object', () => {
      
      // const [,{lang}] = [null, [{env: 'browser', lang: 'ES6'}]];
      const [,[{lang}]] = [null, [{env: 'browser', lang: 'ES6'}]];
      //added [] around lang so that it knows its going into a nested array
      
      assert.equal(lang, 'ES6');
    });
  });
  describe('interesting', () => {
    it('missing refs become undefined', () => {
      
      // const {z} = {x: 1, z: 2};
      const {z} = {x: 1, y: 2};
      //changed x to y so a z wouldnt exist. this caused it to be void since you cant destructure it
      
      assert.equal(z, void 0);
    });
    it('destructure from builtins (string)', () => {
      
      // const {substr} = 1;
      const {substr} = '1';
      //put 1 into quotes so it would be a string, 
      
      assert.equal(substr, String.prototype.substr);
    });
  });
});