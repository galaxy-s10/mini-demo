const Singleton = function (name) {
  this.name = name;
};

let _instant;

function getInstant(name) {
  if (_instant) return _instant;
  _instant = new Singleton(name);
  return _instant;
}

const store1 = getInstant('tom');
const store2 = getInstant('john');

console.log(store1); //{name: 'tom'}
console.log(store2); //{name: 'tom'}
console.log(store1 === store2); //true
