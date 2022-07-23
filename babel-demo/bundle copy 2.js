function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// import { sum } from './foo';
// import { sub } from './bar';
// import { Cat } from './foo'
var a = _objectSpread(
  {},
  {
    age: 1,
  }
); //对象展开，会引入'@babel/runtime/helpers/esm/objectSpread2'
// class Dog {}
// class Tom extends Dog {} //extends，会引入'@babel/runtime/helpers/esm/inheritsLoose'
// let b = Object.assign(a, { age: 2 });
// console.log(new Cat())

console.log(a); // console.log(b);
// console.log(new Tom());
// console.log(sum(1, 2));
// console.log(sub(1, 2));
// console.log([2, 3].includes(23));
// console.log([21, 23].includes(2352));
