// 40: iterator - one example usage. Build an iterable and use it with some built-in ES6 constructs.
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

// The example is a consumable users ("consumable" is in the name just to make it
// more explicit that the generator will consume them):
// - `consumableUser` contains a consumable user, 
// - `anyLeft` tells if there is any user left that can be consumed.  

// class ConsumableUsers {
//   constructor() {
//     this.users = ['Alice', 'Bob'];
//   }
//   get nextUser() {
//     if (this.users.length > 0) {
//       return `user: ${this.users.shift()}`;
//     }
//     return void 0;
//   }
//   get anyLeft() {
//     return this.users.length > 0;
//   }
// }

class ConsumableUsers {
  constructor() {
    this.users = ['Alice', 'Bob'];
    this.empty = false;
  }
  get nextUser() {
    if (this.users.length > 0) {
      return `user: ${this.users.shift()}`;
    }
    this.empty = true;
    return void 0;
  }
  get anyLeft() {
    return this.empty;
  }
}
// added an is empty state. its initial state is false, if you try an return a user whos length
// isnt greater than 0 (impossible), you get empty = true. any left will = inital value false

describe('Iterator usages', () => {

  let usersIterable;
  beforeEach(function(){
    const consumableUsers = new ConsumableUsers();
    function iteratorFunction() {
      return {
        next: function() {
          return {value: consumableUsers.nextUser, done: consumableUsers.anyLeft}
        }
      }
    }
    usersIterable = {};
    
    
    usersIterable[Symbol.iterator] = iteratorFunction;
    // added the line above to make it iterable
    
    
  });
  
  describe('create an iterator/iterable', function() {
    it('the `usersIterable` should be iterable', function() {
      const isIterable = Symbol.iterator in usersIterable;
      assert.equal(isIterable, true);
    });
    it('the iterator of `usersIterable` should return an object', function() {
      const iterator = usersIterable[Symbol.iterator]();
      assert.equal(typeof iterator, 'object');
    });
    it('the iterator of `usersIterable` should have a next function', function() {
      const iterator = usersIterable[Symbol.iterator]();
      assert.equal(typeof iterator.next, 'function');
    });
  });
  
  describe('fill the iterable with content using `ConsumableUsers`', function() {
    describe('using the iterator', function() {
      let iterator;
      beforeEach(function(){
        iterator = usersIterable[Symbol.iterator]();
      });
      it('should return `Alice` as first user', function() {
        const firstItem = iterator.next();
        assert.deepEqual(firstItem, {value: "user: Alice", done: false});
      });
      it('should return `Bob` as second user', function() {
        iterator.next(); // drop the first item
        const secondItem = iterator.next();
        assert.deepEqual(secondItem, {value: "user: Bob", done: false});
      });
      it('should return `done:true`, which means there are no more items', function() {
        iterator.next();
        
        iterator.next();
        // added another .next to iterate through the array
        
        const beyondLast = iterator.next();
        assert.deepEqual(beyondLast, {value: void 0, done: true});
      })
    });
    
    describe('using built-in constructs', function() {
      it('use `Array.from()` to convert an iterable to an array', function() {
        
        // const users = usersIterable;
        const users = Array.from(usersIterable);
        // converted iterable into an array
        
        assert.deepEqual(users, ['user: Alice', 'user: Bob']);
      });
      it('use for-of to loop over an iterable', function() {
        
        // const users = [];
        // for (let user in usersIterable) users.push(user);
        const users = [];
        for (let user of usersIterable) users.push(user);
        //needed to be for of, not for in
        
        
        assert.deepEqual(users, ['user: Alice', 'user: Bob']);
      });
      it('use the spread-operator to convert/add iterable to an array', function() {
        
        // const users = ['noname', usersIterable];
        const users = ['noname', ...usersIterable];
        // spread operator on usersIterable
        
        assert.deepEqual(users, ['noname', 'user: Alice', 'user: Bob']);
      });
      it('destructure an iterable like an array', function() {
        
        // const {firstUser, secondUser} = usersIterable;
        const [firstUser, secondUser] = usersIterable;
        // destructure array using []
        
        assert.equal(firstUser, 'user: Alice');
        assert.equal(secondUser, 'user: Bob');
      })
    });
  });
});

