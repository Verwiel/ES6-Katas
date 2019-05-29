// 23: class - accessors
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Class accessors (getter and setter)', () => {
  it('a getter is defined like a method prefixed with `get`', () => {
    
    // class MyAccount {
    //   get money() { return Infinity; }
    // }
    class MyAccount {
      get balance() { return Infinity; }
    }
    // changed money to balance so the assert could call it
    
    assert.equal(new MyAccount().balance, Infinity);
  });
  it('a setter has the prefix `set`', () => {
    
    // class MyAccount {
    //   get balance() { return this.amount; }
    //   set balance(amount) { this.amount = amount; }
    // }
    // const account = new MyAccount();
    // account.balance = 42;
    class MyAccount {
      get balance() { return this.amount; }
      set balance(amount) { this.amount = amount; }
    }
    const account = new MyAccount();
    account.balance = 42;
    account.balance = 23;
    //changed so that the account balance would equal 23
    
    assert.equal(account.balance, 23);
  });
  
  describe('dynamic accessors', () => {
    it('a dynamic getter name is enclosed in `[]`', function() {
      
      // const balance = 'yourMoney';
      // class YourAccount {
      //   get [getterName]() { return -Infinity; }
      // }
      const balance = 'yourMoney';
      class YourAccount {
        get [balance]() { return -Infinity; }
      }
      //getter name should be changed to balance. calling from above the class
      
      assert.equal(new YourAccount().yourMoney, -Infinity);
    });
    it('a dynamic setter name as well', function() {
      
      // const propertyName = 'balance';
      // class MyAccount {
      //   get [propertyName]() { return this.amount; }
      //   set propertyName(amount) { this.amount = 23; }
      // }
      // const account = new MyAccount();
      // account.balance = 42;
      const propertyName = 'balance';
      class MyAccount {
        get [propertyName]() { return this.amount; }
        set [propertyName](amount) { this.amount = 23; }
      }
      const account = new MyAccount();
      account.balance = 42;
      //put the set propertyName into brackets, based on logic from the last problem
      
      assert.equal(account.balance, 23);
    });
  });
});
