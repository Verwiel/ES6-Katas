// 14: destructuring - parameters
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring function parameters', () => {
  describe('destruct parameters', () => {
    it('multiple params from object', () => {
      
      // const fn = ({id}, {name}) => {
      const fn = ({id, name}) => {
      //removed {} around id and name and put them both in the same object
        
        assert.equal(id, 42);
        assert.equal(name, 'Wolfram');
      };
      const user = {name: 'Wolfram', id: 42};
      fn(user);
    });
    it('multiple params from array/object', () => {
      
      // const fn = ([{name}]) => {
      const fn = ([,{name}]) => {
      //leading comma so it only pulls the second name
        
        
        assert.equal(name, 'Alice');
      };
      const users = [{name: 'nobody'}, {name: 'Alice', id: 42}];
      fn(users);
    });
  });
  describe('default values', () => {
    it('for simple values', () => {
      
      // const fn = (id, name='Bobby') => {
      const fn = (id, name='Bob') => {
      //changed bobby to bo so it would match  
        
        assert.strictEqual(id, 23);
        assert.strictEqual(name, 'Bob');
      };
      fn(23);
    });
    it('for a missing array value', () => {
      
      // const defaultUser = {id: 23, name: 'Joe'};
      // const fn = ([user]) => {
      const defaultUser = {id: 23, name: 'Joe'};
      const fn = ([user, defaultUser]) => {
      //added the defaultUser variable into the function array  
        
        assert.deepEqual(user, defaultUser);
      };
      fn([]);
    });
    it('mix of parameter types', () => {
      
      // const fn = (id, [arr], {obj}) => {
      const fn = (id=1, [arr=2], {obj=3}) => {
      //assigned values from asserts to the variable fn  
        
        assert.equal(id, 1);
        assert.equal(arr, 2);
        assert.equal(obj, 3);
      };
      fn(void 0, [], {});
    });
  });
});
