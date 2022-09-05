const Singleton = function (name) {
  this.name = name;
};

const ProxySingleton = (function () {
  let _instant;
  return function (name) {
    if (_instant) return _instant;
    _instant = new Singleton(name);
    return _instant;
  };
})();

const store1 = new ProxySingleton('tom');
const store2 = new ProxySingleton('john');

console.log(store1); //{name: 'tom'}
console.log(store2); //{name: 'tom'}
console.log(store1 === store2); //true
