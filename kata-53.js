// 53: Map - initialize
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('initialize a `Map`', function(){
  it('a `new Map()` is empty, has size=0', function() {
    
    // const mapSize = new Map();
    const mapSize = new Map().size;
    //checked the size of the map, it was empty so it = 0
    
    assert.equal(mapSize, 0);
  });
  it('init Map with `[[]]` has a size=1', function() {
    
    // const mapSize = new Map().size;
    const mapSize = new Map([[]]).size;
    // butting 2 brackets inside counts as a size of 1, 
    // since its an array with a single value of array inside
    
    assert.equal(mapSize, 1);
  });
  it('init a Map with `[[1]]` is the same as `map.set(1, void 0)`', function() {
    let map1 = new Map([[1]])
    
    // let map2 = new Map().set(1, void 0);
    let map2 = new Map([[1]])
    // set the maps to be = and shorthanded the set to [[1]]
    
    assertMapsEqual(map1, map2);
  });
  it('init Map with multiple key+value pairs', function() {
    const pair1 = [1, 'one'];
    const pair2 = [2, 'two'];
  
    // const map = new Map();
    const map = new Map([pair1, pair2]);
    // put 2 key value pairs inside new map params
    
    assertMapsEqual(map, new Map().set(...pair1).set(...pair2));
  });
  it('keys are unique, the last one is used', function() {
    const pair1 = [1, 'one'];
    const pair2 = [1, 'uno'];
    const pair3 = [1, 'eins'];
    const pair4 = [2, 'two'];
    
    // const map = new Map([pair3, pair1, pair2, pair4]);
    const map = new Map([pair1, pair2,pair3, pair4]);
    // put the pairs in order. since there were 3 keys of 1 ir only takes the value of the last
    
    assertMapsEqual(map, new Map().set(...pair3).set(...pair4));
  });
  it('init Map from an Object, is a bit of work', function() {
    let map = new Map();
    const obj = {x: 1, y: 2};
    const keys = Object.keys(obj);
    // keys.forEach(key => map.set());
    keys.forEach(key => map.set(key,obj[key]));
    // needed to set the key, then the obj with an array of key
    const expectedEntries = [['x', 1], ['y', 2]];
    
    assertMapsEqual(map, expectedEntries);
  });
});

function mapToArray(map) {
  return Array.from(map);
}
function assertMapsEqual(map1, map2) {
  assert.deepEqual(mapToArray(map1), mapToArray(map2));
}
